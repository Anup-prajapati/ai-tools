const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // यह बिना किसी एरर के हर रिक्वेस्ट को पास होने देगा
app.use(express.json());

// Image Generator API (ONLY ONE)
app.post('/api/generate-image', (req, res) => {

    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt required" });
    }

   const realPhoto = `https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&h=400&q=80`;

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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT}`);
});