//= =========================================================================
// IMPORTACAO DE BIBLIOTECA https://dynamoosejs.com/getting_started/Import/
//= =========================================================================
const { v4: uuidv4 } = require('uuid');
const dynamoose = require('dynamoose');

//= =========================================================================
// CONFIGURA HOST DO BANCO DE DADOS
//= =========================================================================
dynamoose.aws.sdk.config.update({});

dynamoose.aws.ddb.local();

//= =========================================================================
// CONFIGURA OS CAMPOS DA TABELA DO BANCO DE
//= =========================================================================
const Sales = new dynamoose.Schema(
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

    value: {
      type: String,
      required: true,
    },

    owner: {
      type: String,
      required: true,
      index: {
        name: 'sales-owner-gsi',
        global: true,
      },
    },
  },
  {},
);

module.exports = dynamoose.model('sales', Sales, {
  create: false, // https://v1.dynamoosejs.com/api/config/
  waitForActive: false,
});
