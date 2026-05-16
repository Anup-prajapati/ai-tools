const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Image Generator API (ONLY ONE)
app.post('/api/generate-image', (req, res) => {

    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt required" });
    }

    const realPhoto = `https://source.unsplash.com/600x400/?${encodeURIComponent(prompt)}`;

    res.json({
        image: realPhoto,
        prompt: prompt
    });

});

app.post('/api/generate-text', (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: "Prompt required" });
    }
    res.json({
        text: `AI response for: ${prompt}`,
        tokens: prompt.length
    });
});


// Home route
app.get('/', (req, res) => {
    res.json({
        message: 'Server Working 🚀'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT}`);
});