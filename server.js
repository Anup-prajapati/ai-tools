const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Text Generator API
app.post('/api/generate-image', (req, res) => {

    const { prompt } = req.body;

    const realPhoto =
        `https://source.unsplash.com/600x400/?${encodeURIComponent(prompt)}`;

    res.json({
        image: realPhoto,
        prompt: prompt
    });

});

// Image Generator API
app.post('/api/generate-image', (req, res) => {

    const { prompt } = req.body;

    const realPhoto =
        'https://picsum.photos/600/400';

    res.json({
        success: true,
        image: realPhoto,
        prompt: prompt
    });

});

app.get('/', (req, res) => {

    res.json({
        message: 'Server Working 🚀'
    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT}`);
});