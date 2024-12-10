const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file when the root URL is requested
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Tic-Tac-Toe-AI.html'));
});

// Start the server
app.listen(8002, () => {
    console.log('ears up');
});
