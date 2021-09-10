// const mongoClient = require('mongodb').MongoClient;

// mongoClient.connect('mongodb://localhost:27017', { 
//     useUnifiedTopology: true 
// }, (error, connection) => {
//     if(error) return console.log(error);
//     global.connection = connection.db('server.js');
// });

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cep');

const cepSchema = new mongoose.Schema({
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    localidade: String,
    uf: String,
    ddd: String
}, { collection: 'cep', timestamps: true}
);

module.exports = {Mongoose: mongoose, CepSchema: cepSchema}