// write your db connection code here
const mongoose = require('mongoose');
const dbConfig = require('../config');


// Create a connection

const createMongoConntection = ()=>{
    mongoose.connect('mongodb://localhost/testForNodeUsers', {
    useUnifiedTopology: true
}, () => {
    console.log("Connected to DB Notes");
});
}



const getMongoConnection = ()=> {
    return mongoose.connection;
}


module.exports={
    createMongoConntection,
    getMongoConnection,
    //createMongoConntectionUser
}