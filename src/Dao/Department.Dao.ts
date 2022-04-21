import { ObjectId } from "mongodb";
import { db } from "../config/database";
import { Department } from "../DTO/department.dto";
const collectionName = "departments";

export interface IDepartmentDao {
    saveDepartment(dept:Department): Promise<any>;
    findById(_id: ObjectId | string): Promise<any>;
    getAllDepartment(): Promise<any>;
    deleteDepartment(_id: ObjectId | string): Promise<any>;
    updateDepartment(_id: string, body: Department): Promise<any>;
}
export class DepartmentDao implements IDepartmentDao {
    public saveDepartment = async (dept:Department) => {
        let newDept={
            ...dept,
            "createAt": new Date(),
            "updateAt": new Date()
        }
        return  db.collection<Department>(collectionName).insertOne(newDept);
    }

    public findById = async (_id: string) => {
        return db.collection<Department>(collectionName).findOne({ "_id": new ObjectId(_id) });
        
    }

    public getAllDepartment = async () => {
        const cursor = db.collection<Department>(collectionName).find({});
        return cursor.toArray();
    }

    public deleteDepartment = async (_id: string) => {
        let result = await db.collection<Department>(collectionName).deleteOne({ "_id": new ObjectId(_id) });
        return result;
    }

    public updateDepartment = async (_id: string, body: Department) => {
        return db.collection<Department>(collectionName).findOneAndUpdate(
            { _id: new ObjectId(_id) },
            {
                $set: {
                    ...body,
                    "updateAt": new Date(),
                }
            }
        )
    }
}