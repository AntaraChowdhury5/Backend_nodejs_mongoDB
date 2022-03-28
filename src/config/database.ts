import { MongoClient,Db } from "mongodb";
import Logger from './logger';


const url="mongodb://localhost:27017"

//database name
const dbName="EmpType";

//create a new mongo client
const client=new MongoClient(url);

export let db:Db;

export const database= async (databaseName:string=dbName)=>{
  const result=await client.connect();
  db= result.db(databaseName);
  Logger.logger.info('Connected to the database.');
  return client
} 




/* import { MongoClient, Db } from "mongodb";
import Logger from './logger';

const url = "mongodb://localhost:27017"
//database name
const dbName = "EmpType";
//create a new mongo client
const client = new MongoClient(url);
export let db: Db;
class Database {
  private DATABASE: string;
  private logger;

  constructor() {
    // Replace database value in the .env file with your database config url
    this.DATABASE = 
    process.env.NODE_ENV === 'test'
      ? process.env.DATABASE_TEST
      : process.env.DATABASE;

    this.logger = Logger.logger;
  }

  public initializeDatabase = async (databaseName: string = dbName): Promise<void> => {
    try {
      const result = await client.connect();
      db = result.db(databaseName);
      this.logger.info('Connected to the database.');
      //return client;
    } catch (error) {
      this.logger.error('Could not connect to the database.', error);
    }
  };
}
export default Database;
 */
/* import mongoose from 'mongoose';
import Logger from './logger';

class Database {
  private DATABASE: string;
  private logger;

  constructor() {
    // Replace database value in the .env file with your database config url
    this.DATABASE =
      process.env.NODE_ENV === 'test'
        ? process.env.DATABASE_TEST
        : process.env.DATABASE;

    this.logger = Logger.logger;
  }

  public initializeDatabase = async (): Promise<void> => {
    try {
      await mongoose.connect(this.DATABASE, {
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      this.logger.info('Connected to the database.');
    } catch (error) {
      this.logger.error('Could not connect to the database.', error);
    }
  };
}
export default Database;
 */
