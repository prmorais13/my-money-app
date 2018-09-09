const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const conn = mongoose.connect('mongodb://localhost/mymoney', 
            {useMongoClient: true})

// module.exports = mongoose.connect('mongodb://localhost/mymoney')
module.export = conn

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
  "O valor {VALUE} informado no campo {PATH} é menor que o limite mínimo de {MIN}"
mongoose.Error.messages.Number.max = 
  "O valor {VALUE} informado no campo {PATH} é maior que o limite máximo de {MAX}"
mongoose.Error.messages.String.enum = 
  "O valor {VALUE} não é válido para o atributo {PATH}"