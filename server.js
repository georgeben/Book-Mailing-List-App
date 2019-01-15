require('dotenv').config();
require('./models/subscribers');
const app = require('./app');
const mongoose = require('mongoose');

//Connection to database
console.log(process.env.DATABASE);
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const dbConnection = mongoose.connection;

dbConnection.on('connected', () =>{
    console.log(`Mongoose connection is open on ${process.env.DATABASE}`);
});

dbConnection.on('error', (err) =>{
    console.log(`Connection error ${err.message}`)
})

const server = app.listen(3000, ()=>{
    console.log(`Server started on port ${server.address().port}`);
})