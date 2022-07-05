//= =========================================================================
// IMPORTACAO DE BIBLIOTECA https://dynamoosejs.com/getting_started/Import/
//= =========================================================================

const dynamoose = require('dynamoose');
const { v4: uuidv4 } = require('uuid');

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
const User = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4,
    },
    email: {
      type: String,
      required: true,
      index: {
        name: 'users-email-gsi',
        global: true,
      },
    },

    name: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = dynamoose.model('users', User, {
  create: false, // https://v1.dynamoosejs.com/api/config/
  waitForActive: false,
});
