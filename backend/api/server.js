const express = require('express');
const { request, response } = require('express');
//const config = require('config');
const app = express();
app.use(express.json());

// Models
// 1. D:\Biblioteca\Github\react-test\source\server.js
// 2. D:\Biblioteca\Github\Samar bikinies\source\server.js

// Routes
app.get('/main', (request, response) => {
    return response.status(200).json({ message: "main started!" });
});

app.listen(8546, () => {
    console.log('Olá Dev 👨‍🚀, embarque na nossa nave 🚀 e vamos para a base espacial, onde estão os marcianos 🛸!');
});