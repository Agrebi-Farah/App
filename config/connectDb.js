
const mongoose = require('mongoose');

const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('We are connected to the Mongo Database')
    } catch (error) {
        console.log(error)
    }
} 

module.exports = connectDb;