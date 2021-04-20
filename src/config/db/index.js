const mongoose = require('mongoose');

async function connect (){

    try{
        await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log('Connect success')            
    } catch (error) {
        console.log(error);
        process.exit(1);

    }
}

module.exports = {connect};

