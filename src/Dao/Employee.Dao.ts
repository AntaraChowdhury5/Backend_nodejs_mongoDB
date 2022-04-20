import { ObjectId } from "mongodb";
import { db } from "../config/database";
import { Employee } from "../DTO/employee.dto";
import { Department } from "../DTO/department.dto";
import { Role } from "../DTO/role.dto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Logger from "../config/logger";
const collectionName = "users";
const deptCol = "departments";
const roleCol = "role";

export interface IUserDao {
    saveUser(user?:Employee,file?:any): Promise<any>;
    findById(_id: ObjectId | string): Promise<any>;
    getAllUser(): Promise<any>;
    deleteUser(_id: ObjectId | string): Promise<any>;
    Update(_id: string, body: Employee): Promise<any>;
    registration(body: Employee): Promise<any>;
    loggedin(body: Employee): Promise<any>;
}
export class UserDao implements IUserDao {
    public saveUser = async (user?:Employee, file?:any) => {
        let deptData = await db.collection<Department>(deptCol).findOne({ dept_name: user.department.dept_name });
        let roleData = await db.collection<Role>(roleCol).findOne({ role_name: user.role.role_name });
        const hashedPassWord = await bcrypt.hash(user.password, 10);  
    
        let empData = {
            "name": user.name,
            "email": user.email, 
            "password":hashedPassWord,
            "department": {
                dept_id: deptData.dept_id,
                dept_name: deptData.dept_name,
            },
            "role": {
                role_id: roleData.role_id,
                role_name: roleData.role_name,
            }, 
            "address":user.address,
            "mobile":user.mobile,
            "image":file.path,
            "createAt":new Date(),
            "updateAt":new Date(),
            "isActive": true,
            "isDelete": false
        }
        
        const data=await db.collection<Employee>(collectionName).insertOne(empData);
        return data;
    }

    public findById = async (_id: string) => {
        let result = db.collection<Employee>(collectionName).findOne({ "_id": new ObjectId(_id) });
        return result;
    }

    public getAllUser = async () => {
        const cursor = db.collection<Employee>(collectionName).find({isDelete: false});
        return cursor.toArray();
    }

    public deleteUser = async (_id: string) => {
        let findData =  db.collection<Employee>(collectionName).findOne({ "_id": new ObjectId(_id) });
        let result = await db.collection<Employee>(collectionName).updateOne(
            { "_id": new ObjectId(_id) },
            {
                $set:{
                    ...findData,
                    "isDelete":true
                }
            }
            );
        console.log(result);
        return result;
    }


    public Update = async (_id: string, body: Employee) => {
        if (!body.department && !body.role) {
            let result = await db.collection<Employee>(collectionName).findOneAndUpdate(
                { _id: new ObjectId(_id) },
                {
                    $set: {
                        ...body,
                        "updateAt": new Date(),
                    }
                }
            )
            return result;
        }
        else if(!body.role && body.department){
            let deptData = await db.collection<Department>(deptCol).findOne({ dept_name: body.department.dept_name });
            return db.collection<Employee>(collectionName).findOneAndUpdate(
                { _id: new ObjectId(_id) },
                {
                    $set: {
                        "name": body.name,
                        "email": body.email,
                        "department.dept_id": deptData.dept_id,
                        "department.dept_name": deptData.dept_name,
                        "updateAt": new Date(),
                    }
                }
            )
        }
        else if(!body.department && body.role){
            let roleData = await db.collection<Role>(roleCol).findOne({ role_name: body.role.role_name });
            return db.collection<Employee>(collectionName).findOneAndUpdate(
                { _id: new ObjectId(_id) },
                {
                    $set: {
                        "name": body.name,
                        "email": body.email,
                        "role.role_id": roleData.role_id,
                        "role.role_name": roleData.role_name,
                        "updateAt": new Date(),
                    }
                }
            )
        }
        else{
            let roleD = await db.collection<Role>(roleCol).findOne({ role_name: body.role.role_name });
            let deptD = await db.collection<Department>(deptCol).findOne({ dept_name: body.department.dept_name });
            return db.collection<Employee>(collectionName).findOneAndUpdate(
                { _id: new ObjectId(_id) },
                {
                    $set: {
                        "name": body.name,
                        "email": body.email,
                        "role.role_id": roleD.role_id,
                        "role.role_name": roleD.role_name,
                        "department.dept_id": deptD.dept_id,
                        "department.dept_name": deptD.dept_name,
                        "updateAt": new Date(),
                    }
                }
            )
        }
    }

    public registration = async (body: Employee) => {
        const hashedPassWord = await bcrypt.hash(body.password, 10);
        body.password = hashedPassWord;
        return db.collection<Employee>(collectionName).insertOne(body);
    };

    public loggedin = async (body: Employee) => {
        let data = db.collection<Employee>(collectionName)
        const findData = await data.findOne({
            email: body.email
        });
        if (findData) {
            const passworkCheck = await bcrypt.compare(body.password, findData.password)
            if (passworkCheck) {
                const secretKey = 'antara';
                const payload = { id: findData._id, email: findData.email, role: findData.role.role_name };
                const token = jwt.sign(payload, secretKey)
                Logger.logger.info(`Login token  ${token}`);
                return Promise.resolve({
                    UserDetails: {
                        userId: findData._id,
                        email: findData.email,
                        role: findData.role.role_name,
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