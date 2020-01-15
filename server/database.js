const mongoose = require('mongoose');

const uri = 'mongodb://localhost/prueba';

mongoose.connect(uri)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err))
    
module.exports = mongoose