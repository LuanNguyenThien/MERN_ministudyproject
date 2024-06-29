const mongoose = require('mongoose');
async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/mern_auth')
        .then(function(){
            console.log('Connect success');
        });
    }catch(e){
        console.log('Connect fail',e);
    }
}

module.exports = connectDB;