const mongoose = require('mongoose');

const banco = mongoose;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
  };

banco.connect('mongodb://localhost:27017', options)
.then(() => console.log('Conexão com MongoDB estabelecida'))
.catch(err => console.log(`Erro na conexão com MongoDB: ${err}`));

module.exports = banco;