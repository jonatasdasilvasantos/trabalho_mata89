const md5 = require('md5');
const express = require('express');
//const config = require('./config/confing');
const sqlite3 = require('sqlite3').verbose();
const { request, response } = require('express');
//const datasource = require('./config/datasource');

// Configurações
const app = express();
app.set('port', 8546);
app.use(express.json());

//Routes
require('./routes/routes')(app);


// Models
// 1. D:\Biblioteca\Github\react-test\source\server.js
// 2. D:\Biblioteca\Github\Samar bikinies\source\server.js

app.listen(app.get('port'), () => {
    console.log('Olá Dev 👨‍🚀, embarque na nossa nave 🚀 e vamos para a base espacial, antes que o meteoro ☄️ venha, então vamos para onde estão os marcianos 🛸!');
});