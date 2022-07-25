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
const Vehicles = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4,
    },

    brand: {
      type: String,
      required: true,
    },

    modelo: {
      type: String,
      required: true,
    },

    board: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    owner: {
      type: String,
      required: true,
      index: {
        name: 'vehicles-owner-gsi',
        global: true,
      },
    },
  },
  {},
);

module.exports = dynamoose.model('vehicles', Vehicles, {
  create: false, // https://v1.dynamoosejs.com/api/config/
  waitForActive: false,
});
