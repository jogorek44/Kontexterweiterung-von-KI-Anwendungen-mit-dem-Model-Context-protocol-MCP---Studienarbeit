**Ausführung**

**MCP**
1. Starte einen Server mit: `npx tsx src/mcp/<servername>.ts` (serverOne/serverTwo)

2. Starte ngrok mit: `ngrok http <serverport>` (3000/3001)

3. Kopiere die HTTPS-Forwarding-URL

4. Setze die ngrok-URL in einen Client ein

5. Starte den Client mit: `npx tsx src/mcp/<clientname>.ts` (clientOne/clientTwo)

---

**API**
1. Starte den API-Server mit: `npx tsx src/api/api-serverOne.ts`

2. Starte den einfachen Client mit: `npx tsx src/api/api-clientOne.ts`

3. Starte den zweiten API-Server mit: `npx tsx src/api/api-serverTwo.ts`

4. Starte den komplexeren Client mit: `npx tsx src/api/api-clientTwo.ts`