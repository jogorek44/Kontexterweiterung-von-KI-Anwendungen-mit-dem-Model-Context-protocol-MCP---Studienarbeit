// src/api/api-serverTwo.ts
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 3001;

// Tool-Endpunkt zum Subtrahieren von zwei Zahlen
app.post('/subtract', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Beide Parameter a und b müssen Zahlen sein.' });
    }

    const result = a - b;
    res.json({ difference: result });
});

app.listen(PORT, () => {
    console.log(`API Server Two (Subtract) listening on port ${PORT}`);
});