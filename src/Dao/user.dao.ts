import { ObjectId } from "mongodb";
import { db } from "../config/database";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import Logger from "../config/logger";
const collectionName = "users";

export interface IUserDao {
    saveUser(user: User): Promise<any>;
    findById(_id: ObjectId | string): Promise<any>;
    getAllUser(): Promise<any>;
    deleteUser(_id: ObjectId | string): Promise<any>;
    Update(_id: string, body: User): Promise<any>;
    registration(body:User): Promise<any>;
    loggedin(body:User): Promise<any>;
}
export class UserDao implements IUserDao {
    public saveUser = async (user: User) => {
        const result = await db.collection<User>(collectionName).insertOne(user);
        return result;
    }

    public findById = async (_id: string) => {
        const result = await db.collection<User>(collectionName).findOne({ "_id": new ObjectId(_id) });
        console.log(result);
        return result;
    }

    public getAllUser = async () => {
        const cursor = await db.collection<User>(collectionName).find({});
        const result = await cursor.toArray();
        return result
    }

    public deleteUser = async (_id: string) => {
        const result = await db.collection<User>(collectionName).deleteOne({ "_id": new ObjectId(_id) });
        console.log(result);
        return result;
    }

    public Update = async (_id: string, body: User) => {
        let result = await db.collection<User>(collectionName).findOneAndUpdate(
            { _id: new ObjectId(_id) },
            {
                $set: {
                    ...body
                }
            }
        )
        return result;
    }

    public registration = async (body:User) => {
        const hashedPassWord = await bcrypt.hash(body.password, 10);
        body.password = hashedPassWord;
        let result = await db.collection<User>(collectionName).insertOne(body);
        return result;
    };

    public loggedin = async (body:User) => {
        let data = await db.collection<User>(collectionName)
        const findData = await data.findOne({
            email: body.email
        });
        if (findData) {
            const passworkCheck = await bcrypt.compare(body.password, findData.password)
            if (passworkCheck) {
                const secretKey = 'antara';
                const payload = { id: findData._id, email: findData.email, role: findData.role };
                const token = await jwt.sign(payload, secretKey)
                Logger.logger.info(`Login token  ${token}`);
                return new Promise((resolve, reject) => {
                    resolve({
                        UserDetails: {
                            userId: findData._id,
                            email: findData.email,
                            role: findData.role,
                            token: token
                        }
                    })
                })
            }
            else {
                return new Promise((resolve, reject) => {
                    reject("worng entry");
                }
                )
            }
        }
        else {
            return new Promise((resolve, reject) => {
                reject("worng entry");
            })
        }
    } 

}