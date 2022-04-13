import { MongoClient,Db } from "mongodb";
import Logger from './logger';


const url="mongodb+srv://antara:antara@crm-db.dvzbw.mongodb.net/crm-db?retryWrites=true&w=majority"
// "mongodb://localhost:27017"


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
