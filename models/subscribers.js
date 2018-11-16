const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subscribersSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    date:Date
});

module.exports = mongoose.model('Subscribers', subscribersSchema)