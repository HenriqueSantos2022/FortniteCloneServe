//=====================================================================
// CARREGA O ENV. CASO NÃO SEJA SERVELESS
//=====================================================================
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//======================================================================
// CONFIGURA AS ROTAS FIXAS
//======================================================================
app.get('/', (req, res) => {
  res.json({ status: 200, message: 'im fine!' });
});

app.get('/health-check', (req, res) => {
  res.json({ status: 200, message: 'im fine!' });
});

//======================================================================
// CONFIGURA AS ROTAS CUSTOMIZAVEIS
//======================================================================
app.use('/users/', require('./routes/users'));
app.use('/restaurants/', require('./routes/restaurants'));
app.use('/clientes/', require('./routes/clientes'));
app.use('/entregador/', require('./routes/entregador'));

//======================================================================
// CONFIGURA RESPOSTA PADRAO QUANDO NAO EXISTE O ENDPOINT
//======================================================================
app.use((req, res, next) => {
  const err = { message: 'Rota nao existe ', status: 404, code: '001' };
  const error = new Error(err.message);
  error.status = err.status;
  error.code = err.code;
  next(error);
});

//======================================================================
// CONFIGURA O FORMATO DA RESPOSTA PADRAO DE ERRO
//======================================================================
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      code: error.code,
      message: error.message,
    },
  });
});

//======================================================================
// SUPORTE PARA SERVELESS & SERVER
//======================================================================

const server = http.createServer(app);
server.listen(port, () => console.log(`Example app listening on port ${port}`));
