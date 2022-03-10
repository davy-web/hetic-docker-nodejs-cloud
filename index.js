const express = require('express');
const app = express();

const HOST = 'localhost';
const PORT = 8080;

app.get('/', (req, res) => {
    res.status(200).send("Hello Davy CHEN !");
});

app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});