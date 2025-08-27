// src/api/api-clientTwo.ts
import axios from 'axios';
import OpenAI from 'openai';
import dotenv from "dotenv";

dotenv.config();

// Initialisierung des OpenAI-Clients
const openai = new OpenAI();

const serverOneUrl = 'http://localhost:3000';
const serverTwoUrl = 'http://localhost:3001';

// Werkzeug-Definitionen für Addition und Subtraktion
const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
    {
        type: 'function',
        function: {
            name: 'add',
            description: 'Addiert zwei Zahlen.',
            parameters: {
                type: 'object',
                properties: {
                    a: { type: 'number', description: 'Die erste Zahl' },
                    b: { type: 'number', description: 'Die zweite Zahl' },
                },
                required: ['a', 'b'],
            },
        },
    },
    {
        type: 'function',
        function: {
            name: 'subtract',
            description: 'Subtrahiert die zweite Zahl von der ersten.',
            parameters: {
                type: 'object',
                properties: {
                    a: { type: 'number', description: 'Die erste Zahl (Minuend)' },
                    b: { type: 'number', description: 'Die zweite Zahl (Subtrahend)' },
                },
                required: ['a', 'b'],
            },
        },
    },
];

async function runClientTwo(input: string) {
    console.log(`ClientTwo verarbeitet: "${input}"`);
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [{ role: 'user', content: input }],
            tools: tools,
            tool_choice: 'auto',
        });

        const responseMessage = response.choices[0].message;
        const toolCalls = responseMessage.tool_calls;

        if (toolCalls) {
            for (const toolCall of toolCalls) {
                const args = JSON.parse(toolCall.function.arguments);
                console.log(`KI hat entschieden, '${toolCall.function.name}' mit den Argumenten ${JSON.stringify(args)} aufzurufen.`);

                if (toolCall.function.name === 'add') {
                    const serverResponse = await axios.post(`${serverOneUrl}/add`, { a: args.a, b: args.b });
                    console.log(`Antwort von api-serverOne (add): ${serverResponse.data.sum}\n`);

                } else if (toolCall.function.name === 'subtract') {
                    const serverResponse = await axios.post(`${serverTwoUrl}/subtract`, { a: args.a, b: args.b });
                    console.log(`Antwort von api-serverTwo (subtract): ${serverResponse.data.difference}\n`);
                }
            }
        } else {
            console.log("Die KI hat entschieden, kein Werkzeug aufzurufen.");
            console.log("KI-Antwort:", responseMessage.content);
        }

    } catch (error) {
        console.error('Fehler bei der Kommunikation mit der KI oder den Servern:', error.message);
    }
}

// Beispielaufrufe
runClientTwo("Was ist 99 plus 1?");
runClientTwo("Was ist 100 minus 51?");