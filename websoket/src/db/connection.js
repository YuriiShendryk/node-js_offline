const mongoose = require('mongoose');

const MONGO_DB_CONNECTION_STRING = process.env.MONGO_ATLAS_CONNECTION_STRING || '';


const connectDb = async () => { 
try {
    await mongoose.connect(MONGO_DB_CONNECTION_STRING);
} catch (error) {
    throw new Error('Can not connect to the DB');
}
}


module.exports = {connectDb}