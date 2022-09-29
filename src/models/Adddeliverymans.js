//= =========================================================================
// IMPORTACAO DE BIBLIOTECA https://dynamoosejs.com/getting_started/Import/
//= =========================================================================

const { v4: uuidv4 } = require('uuid');
const dynamoose = require('dynamoose');

//= =========================================================================
// CONFIGURA HOST DO BANCO DE DADOS
//= =========================================================================
dynamoose.aws.sdk.config.update({
  region: 'use-east-1',
  accessKeyId: 'xxxx',
  secretAccessKey: 'xxxx',
});

dynamoose.aws.ddb.local();

//= =========================================================================
// CONFIGURA OS CAMPOS DA TABELA
//= =========================================================================
const Adddeliverymans = new dynamoose.Schema(
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

    owner: {
      type: String,
      required: true,
      index: {
        name: 'restaurants-owner-gsi',
        global: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = dynamoose.model('restaurants', Adddeliverymans, {
  create: false, // https://v1.dynamoosejs.com/api/config/
  waitForActive: false,
});
