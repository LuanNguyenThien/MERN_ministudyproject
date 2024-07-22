const mongoose = require('mongoose');
async function connectDB(){
    try{
        await mongoose.connect(`mongodb://localhost:${process.env.PORT_MONGO}/${process.env.database_name}`)
        .then(function(){
            console.log('Connect success');
        });
    }catch(e){
        console.log('Connect fail',e);
    }
}

module.exports = connectDB;