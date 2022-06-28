// ==========================================================================
// IMPORTACAO DE BIBLIOTECA https://dynamoosejs.com/getting_started/Import/
// ==========================================================================
const { v4: uuidv4 } = require('uuid');
const dynamoose = require('dynamoose');

// ==================================
// CONFIGURA HOST DO BANCO DE DADOS
// ==================================
dynamoose.aws.sdk.config.update({});

dynamoose.aws.ddb.local();

// ==================================
// CONFIGURA OS CAMPOS DA TABELA DO BANCO DE
// ==================================
const clientes = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    datadenascimento: {
      type: String,
      required: true,
    },

    idade: {
      type: String,
      required: true,
    },

    rg: {
      type: String,
      required: true,
    },

    cpf: {
      type: String,
      required: true,
    },
  },
  {},
);

module.exports = dynamoose.model('cliente', clientes);
