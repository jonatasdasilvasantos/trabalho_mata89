//const md5 = require('md5');
const express = require('express');
//const config = require('./config/confing');
//const sqlite3 = require('sqlite3').verbose();
const { request, response } = require('express');
//const datasource = require('./config/datasource');

// Configurações
const app = express();
app.set('port', 8546);
app.use(express.json());

// BaseData
/*var db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE,
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Base de dados conectado com Secesso!.');
        }
    }
);
app.set('database', db);
db.serialize(() => {
    db.run("CREATE TABLE if not exists users (login TEXT PRIMARY KEY NOT NULL UNIQUE, password TEXT NOT NULL, university TEXT NOT NULL, student BOOLEAN)");
    db.run("CREATE TABLE if not exists receitas (nome TEXT, valor TEXT, university TEXT)");
    db.run("CREATE TABLE if not exists despesas (nome TEXT, valor TEXT, university TEXT)");
    db.run("CREATE TABLE if not exists parcerias (nome TEXT, valor TEXT, university TEXT)");
    db.run("CREATE TABLE if not exists projetos (nome TEXT, valor TEXT, university TEXT)");
});*/

process.on('SIGINT', () => {
    //db.close();
    server.close();
});

//Routes
require('./routes/routes')(app);


// Models
// 1. D:\Biblioteca\Github\react-test\source\server.js
// 2. D:\Biblioteca\Github\Samar bikinies\source\server.js

app.listen(app.get('port'), () => {
    console.log('Olá Dev 👨‍🚀, embarque na nossa nave 🚀 e vamos para a base espacial, antes que o meteoro ☄️ venha, então vamos para onde estão os marcianos 🛸!');
});