require('dotenv').config();
require('./models/subscribers');
const app = require('./app');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

//Connection to database
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const dbConnection = mongoose.connection;

dbConnection.on('connected', () =>{
    console.log(`Mongoose connection is open on ${process.env.DATABASE}`);
});

dbConnection.on('error', (err) =>{
    console.log(`Connection error ${err.message}`)
})

const server = app.listen(PORT, ()=>{
    console.log(`Server started on port ${server.address().port}`);
})