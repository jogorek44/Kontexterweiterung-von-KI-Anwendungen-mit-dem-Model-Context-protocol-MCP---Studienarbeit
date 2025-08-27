//run with npx tsx src/mcp/clientTwo.ts

import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const clientTwo = new OpenAI();

const resp = await clientTwo.responses.create({
    model: "gpt-4o-mini",
    tools: [
        {
            type: "mcp",
            server_label: "AddNumbersServer",
            server_url: "https://bc61efb9a7cf.ngrok-free.app/mcp",
            require_approval: "never",
        },
        {
            type: "mcp",
            server_label: "SubtractNumbersServer",
            server_url: "https://3c593fe6847f.ngrok-free.app/mcp",
            require_approval: "never",
        },
    ],
    input: "What is 457 - 346?",
});

console.log(resp);
console.log(resp.output_text);
