import { ObjectId } from "mongodb";
import { db } from "../config/database";
import { User } from "../models/user.model";
const collectionName="users";

export interface IUserDao{
    saveUser(user:User):Promise<any>;
    findById(_id:ObjectId | string):Promise<any>;
    getAllUser():Promise<any>;
}
export class UserDao implements IUserDao{
    public saveUser= async(user:User)=>{
        const result=await db.collection<User>(collectionName).insertOne(user);
        return result;
    }
    public findById=async(_id:string)=>{       
        const result = await db.collection<User>(collectionName).findOne({_id});
        return result;
    }

    public getAllUser=async()=>{
        const cursor= await db.collection<User>(collectionName).find({});
        const result = await cursor.toArray();
        return result
       }
}