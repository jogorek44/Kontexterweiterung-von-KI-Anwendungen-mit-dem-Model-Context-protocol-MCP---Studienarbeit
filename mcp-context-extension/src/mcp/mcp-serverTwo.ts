//run with npx tsx src/mcp/serverTwo.ts
//inspect with npx @modelcontextprotocol/inspector tsx src/mcp/serverTwo.ts
//Url: http://localhost:3001/mcp

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js"
import { z } from "zod";
import express from "express";

function getServer() {

//Create an MCP server
const server = new McpServer({  
    name: "SubtractNumbersServer",
    version: "1.0.0",
});

//Tool of the Server
server.tool(
    "subtractNumbers",
    "Subtract two numbers from each other. (a - b)",
    { a: z.number(), b: z.number()},
    async ({ a, b }) => {
        const result = a - b;
        return {
            content: [{ type: "text", text: JSON.stringify({ sum: result }) }],
        };
    }
);

return server;
}

const app = express();
app.use(express.json());

app.post("/mcp", async (req: express.Request, res: express.Response) => {
    try{
        //Handle the MCP request
        const server = getServer();

        const transport = new StreamableHTTPServerTransport({
            sessionIdGenerator: undefined,
        });

        res.on("close", () => {
            console.log("Request closed");
            transport.close();
            server.close();
        });

        await server.connect(transport);

        await transport.handleRequest(req, res, req.body);
    } catch (error) {
        console.error("Error handling MCP request:", error);
        if (!res.headersSent) {
            res.status(500).json({
                jsonrpc: "2.0",
                error: {
                    code: -32603,
                    message: "Internal server error",
                },
                id: null,
            });
        };
    };

});

//Start the HTTP server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`MCP Stateless Streamable HTTP Server listening on port ${PORT}`);
});