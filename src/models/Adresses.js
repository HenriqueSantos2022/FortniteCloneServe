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

//= ======================================================================================
// CONFIGURA OS CAMPOS DA TABELA DO BANCO DE DADOS
//= ======================================================================================
const Adresses = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4,
    },

    road: {
      type: String,
      required: true,
    },

    number: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    zipcode: {
      type: String,
      required: true,
    },

    referencepoint: {
      type: String,
      required: true,
    },

    owner: {
      type: String,
      required: true,
      index: {
        name: 'adresses-owner-gsi',
        global: true,
      },
    },
  },
  {},
);

module.exports = dynamoose.model('adresses', Adresses, {
  create: false, // https://v1.dynamoosejs.com/api/config/
  waitForActive: false,
});
