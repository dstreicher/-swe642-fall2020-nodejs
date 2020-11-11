const express = require('express');
const dogAPI = require('./callback');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    dogAPI.getDog((message) => {
        res.send(`<img src="${message}">`);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});