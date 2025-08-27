// src/api/api-clientOne.ts
import axios from 'axios';
import OpenAI from 'openai';
import dotenv from "dotenv";

dotenv.config();

// Initialisierung des OpenAI-Clients
const openai = new OpenAI();

const serverOneUrl = 'http://localhost:3000';

// Werkzeug-Definition für die Addition, damit das LLM weiß, was es tun kann
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
];

async function runClientOne(input: string) {
    console.log(`ClientOne verarbeitet: "${input}"`);

    try {
        // Die KI entscheidet, ob ein Werkzeug aufgerufen werden soll
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
                if (toolCall.function.name === 'add') {
                    const args = JSON.parse(toolCall.function.arguments);
                    console.log(`KI hat entschieden, 'add' mit den Argumenten ${JSON.stringify(args)} aufzurufen.`);

                    // Aufruf des eigentlichen REST-API-Servers
                    const serverResponse = await axios.post(`${serverOneUrl}/add`, { a: args.a, b: args.b });
                    console.log(`Antwort von api-serverOne: ${serverResponse.data.sum}\n`);
                    return serverResponse.data;
                }
            }
        } else {
            console.log("Die KI hat entschieden, kein Werkzeug aufzurufen.");
            console.log("KI-Antwort:", responseMessage.content);
        }

    } catch (error) {
        console.error('Fehler bei der Kommunikation mit der KI oder dem Server:', error.message);
    }
}

// Beispielaufruf
runClientOne("Was ist 42 plus 1337?");