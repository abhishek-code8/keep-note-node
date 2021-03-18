const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Note = Schema({
    noteId:{
        type:String,

    },
    userId:{
        type:String,

    },
    title:{
        type: String,
        require: true
    },
    text:{
        type:String,
        require: true
    },
    status:{
        type:String,
        require:true
    },
    createdOn:{
        type: String

    },
    modifiedOn:{
        type: String
    }


});



module.exports = mongoose.model('note',Note);