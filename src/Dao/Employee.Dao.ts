import { ObjectId } from "mongodb";
import { db } from "../config/database";
import { Employee } from "../models/employee.model";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import Logger from "../config/logger";
const collectionName = "users";

export interface IUserDao {
    saveUser(user: Employee): Promise<any>;
    findById(_id: ObjectId | string): Promise<any>;
    getAllUser(): Promise<any>;
    deleteUser(_id: ObjectId | string): Promise<any>;
    Update(_id: string, body: Employee): Promise<any>;
    registration(body:Employee): Promise<any>;
    loggedin(body:Employee): Promise<any>;
}
export class UserDao implements IUserDao {
    public saveUser = async (user: Employee) => {
        return db.collection<Employee>(collectionName).insertOne(user);
    }

    public findById = async (_id: string) => {
        let result = await db.collection<Employee>(collectionName).findOne({ "_id": new ObjectId(_id) });
        console.log(result);
        return result;
    }

    public getAllUser = async () => {
        const cursor = db.collection<Employee>(collectionName).find({});
        return cursor.toArray();
    }

    public deleteUser = async (_id: string) => {
        let result = await db.collection<Employee>(collectionName).deleteOne({ "_id": new ObjectId(_id) });
        console.log(result);
        return result;
    }

    public Update = async (_id: string, body: Employee) => {
        return db.collection<Employee>(collectionName).findOneAndUpdate(
            { _id: new ObjectId(_id) },
            {
                $set: {
                    ...body
                }
            }
        )
    }

    public registration = async (body:Employee) => {
        const hashedPassWord = await bcrypt.hash(body.password, 10);
        body.password = hashedPassWord;
        return db.collection<Employee>(collectionName).insertOne(body);
    };

    public loggedin = async (body:Employee) => {
        let data = db.collection<Employee>(collectionName)
        const findData = await data.findOne({
            email: body.email
        });
        if (findData) {
            const passworkCheck = await bcrypt.compare(body.password, findData.password)
            if (passworkCheck) {
                const secretKey = 'antara';
                const payload = { id: findData._id, email: findData.email, role: findData.role };
                const token = jwt.sign(payload, secretKey)
                Logger.logger.info(`Login token  ${token}`);
                return Promise.resolve({
                    UserDetails: {
                        userId: findData._id,
                        email: findData.email,
                        role: findData.role,
                        token: token
                    }
                });
            }
            else {
            return Promise.reject("Wrong Entry")
            }
        }
        else {
            return Promise.reject("Wrong Entry")
        }
    } 

}