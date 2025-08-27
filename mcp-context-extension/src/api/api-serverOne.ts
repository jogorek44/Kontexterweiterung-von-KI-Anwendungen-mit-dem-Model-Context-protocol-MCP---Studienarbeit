// src/api/api-serverOne.ts
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// Tool-Endpunkt zum Addieren von zwei Zahlen
app.post('/add', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Beide Parameter a und b müssen Zahlen sein.' });
    }

    const result = a + b;
    res.json({ sum: result });
});

app.listen(PORT, () => {
    console.log(`API Server One (Add) listening on port ${PORT}`);
});