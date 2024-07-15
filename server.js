const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

const responses = {
    '1': "You selected Option 1. Here are your sub-options...",
    '2': "You selected Option 2. Here are your sub-options...",
    '3': "You selected Option 3. Here are your sub-options...",
    '4': "You selected Option 4. Here are your sub-options...",
    '5': "You selected Option 5. Here are your sub-options...",
    '6': "You selected Option 6. Here are your sub-options...",
    '7': "You selected Option 7. Here are your sub-options...",
    '8': "You selected Option 8. Here are your sub-options...",
    '9': "You selected Option 9. Here are your sub-options...",
    '10': "You selected Option 10. Here are your sub-options..."
};

// Chat endpoint
app.post('/api/chat', (req, res) => {
    const { option } = req.body;
    const response = responses[option] || "Sorry, I didn't understand that.";
    res.json({ response });
});

// Serve the index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
