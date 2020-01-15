const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();

const { mongoose } = require('./database')

// Settings
app.set('port', 3000 || process.env.PORT)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}))

// Routes
app.use('/api/clients/', require('./routes/client.routes'))


// Starting the server
app.listen(app.get('port'), () =>{
    console.log('Puerto', app.get('port'))
});