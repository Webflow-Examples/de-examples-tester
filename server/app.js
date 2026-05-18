import express from 'express';
import cors from 'cors';

const app = express();
const port = 1338;
const apiKey = process.env.ANTHROPIC_API_KEY;

if(!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set');
    process.exit(1);
}

app.use(cors());
app.use(express.json());

app.post('/prompt', async (req, res) => {
    const { prompt } = req.body;
    console.log('testing', req.body);
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'X-Api-Key': apiKey
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 4096,
          system:
            'You are a coding assistant that helps users write and modify Webflow Designer API code. When asked to make changes to code, return only the modified code without any explanation or markdown code fences. Always respond in plain text, without any markdown formatting. You should only use V2 of the Designer Extension API.',
          messages: [{ role: 'user', content: prompt }],
        }),
    })

    res.json(await response.json());
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});