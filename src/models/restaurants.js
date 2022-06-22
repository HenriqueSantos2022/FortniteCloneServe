// ==========================================================================
// IMPORTACAO DE BIBLIOTECA https://dynamoosejs.com/getting_started/Import/
// ==========================================================================
const { v4: uuidv4 } = require('uuid');
const dynamoose = require('dynamoose');

// ==================================
// CONFIGURA HOST DO BANCO DE DADOS
// ==================================
dynamoose.aws.sdk.config.update({
  region: 'use-east-1',
  accessKeyId: 'xxxx',
  secretAccessKey: 'xxxx',
});

dynamoose.aws.ddb.local();

// ==================================
// CONFIGURA OS CAMPOS DA TABELA
// ==================================
const Restaurant = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4(),
    },

    name: {
      type: String,
      required: true,
    },

    cnpj: {
      type: String,
      required: true,
    },

    owner: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = dynamoose.model('Restaurant', Restaurant);
