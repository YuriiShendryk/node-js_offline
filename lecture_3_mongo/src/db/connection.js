const { MongoClient } = require('mongodb');

const {collections } = require('../model/collections');

const MONGO_DB_CONNECTION_STRING = process.env.MONGO_ATLAS_CONNECTION_STRING || '';


const connectDb = async () => { 
try {
    const client = new MongoClient(MONGO_DB_CONNECTION_STRING);
    const connect = await client.connect();
    const db = connect.db();
    const posts = db.collection('posts');
    collections.Posts = posts;
} catch (error) {
    throw new Error('Can not connect to the DB');
}
}


module.exports = {connectDb}