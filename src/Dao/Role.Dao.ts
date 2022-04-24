import { ObjectId } from "mongodb";
import { db } from "../config/database";
import { Role } from "../DTO/role.dto";
const collectionName = "role";

export interface IRoleDao {
    saveRole(role: Role): Promise<any>;
    findById(_id: ObjectId | string): Promise<any>;
    getAllRole(): Promise<any>;
    deleteRole(_id: ObjectId | string): Promise<any>;
    updateRole(_id: string, body?: Role): Promise<any>;
}
export class RoleDao implements IRoleDao {
    public saveRole = async (role: Role) => {
        let newRole={
            ...role,
            "createAt": new Date(),
            "updateAt": new Date()
        }
        return db.collection<Role>(collectionName).insertOne(newRole);
    }

    public findById = async (_id: string) => {
        return db.collection<Role>(collectionName).findOne({ "_id": new ObjectId(_id) });
        
    }

    public getAllRole = async () => {
        const cursor = db.collection<Role>(collectionName).find({});
        return cursor.toArray();
    }

    public deleteRole = async (_id: string) => {
        let result = await db.collection<Role>(collectionName).deleteOne({ "_id": new ObjectId(_id) });
        console.log(result);
        return result;
    }

    public updateRole = async (_id: string, body?: Role) => {
        return db.collection<Role>(collectionName).findOneAndUpdate(
            { _id: new ObjectId(_id) },
            {
                $set: {
                    ...body,
                    "updateAt": new Date()
                }
            }
        )
    }
}