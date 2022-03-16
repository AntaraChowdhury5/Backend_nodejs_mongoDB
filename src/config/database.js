import logger from './logger';

const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017";
const client= new MongoClient(uri);
const databaseName='APImongoDB';

async function database()
{
    let result= await client.connect();
    let db=result.db(databaseName);
    logger.info('Connected to the database.');
    return db.collection('EmpLOYEE');
}

module.exports= database;



/* import mongoose from 'mongoose';
import logger from './logger';

const database = async () => {
  try {
    // Replace database value in the .env file with your database config url
    const DATABASE =
      process.env.NODE_ENV === 'test'
        ? process.env.DATABASE_TEST
        : process.env.DATABASE;

    await mongoose.connect(DATABASE, {
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    logger.info('Connected to the database.');
  } catch (error) {
    logger.error('Could not connect to the database.', error);
  }
};
export default database; */
