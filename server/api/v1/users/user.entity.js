const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = Schema({
    username:{
        type:String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
});


module.exports = mongoose.model("user",User);