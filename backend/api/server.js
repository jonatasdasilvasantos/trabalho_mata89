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

app.get('/receitas', (request, response) => {
    return response.status(200).json({ message: "receitas started!" });
});

app.get('/dashboard', (request, response) => {
    return response.status(200).json({ message: "dashboard started!" });
});

app.get('/despesas', (request, response) => {
    return response.status(200).json({ message: "despesas started!" });
});

app.post('/login', (request, response) => {
    const { name, pass } = request.body;
    console.log("User: " + name + ", password: " + pass);
    return response.status(204).json({ message: "login started!", name: name, password: pass });
});

app.post('/cadastro', (request, response) => {
    const { login, password, retryPassword, universidade, type } = request.body;
    return response.status(201).json({ message: "cadastro started!", login: login, password: password, universidade: universidade, type: type });
});

app.put('/restore', (request, response) => {
    return response.status(200).json({ message: "restore started!" });
});

app.listen(8546, () => {
    console.log('Olá Dev 👨‍🚀, embarque na nossa nave 🚀 e vamos para a base espacial, onde estão os marcianos 🛸!');
});