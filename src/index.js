//=====================================================================
// CARREGA O ENV. CASO NÃO SEJA SERVELESS 
//=====================================================================
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//======================================================================
// CONFIGURA AS ROTAS V1
//======================================================================
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.use('/users/', require('./routes/users'));

//======================================================================
// SUPORTE PARA SERVELESS & SERVER 
//======================================================================

let sever = http.createServer(app);
server.listen(port, () => console.log('Runing in http://localhost:${port}'));