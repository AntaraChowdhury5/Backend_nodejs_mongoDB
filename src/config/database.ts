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