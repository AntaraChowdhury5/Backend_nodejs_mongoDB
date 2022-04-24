import { ObjectId } from "mongodb";
import { database } from "../config/database";
import { RoleDao } from "./Role.Dao";

describe("Role Dao", () => {
    let client;

    beforeAll(async () => {
        client = await database("test-db")
    });
    afterAll(async () => {
        await client.close();
    });

    describe("save new employee", () => {
        it("should save a user", async () => {
            const data = {
                "role_id": 100,
                "role_name": "abc",
                "createAt": new Date(),
                "updateAt": new Date()
            };
            const dao = new RoleDao();
            const empDetails = await dao.saveRole(data);
            expect(empDetails.acknowledged).toEqual(true);
        })
    });
    describe("testing findall dao", () => {
        it("findall dao should return a array", async () => {
            let empDetails = await new RoleDao().getAllRole()
            expect(empDetails?.length).toBe(21)
        })
    }) 
    describe("testing findById dao", () => {
        it("findall dao should return a object", async () => {
            let empDetails = await new RoleDao().findById('6262a44f202b827edbfd79f4')
            expect(empDetails).toMatchObject({
                _id: new ObjectId("6262a44f202b827edbfd79f4"),
                role_id: 100,
                role_name: 'abc'
            })
        })
    })
    describe("testing delete Dao", () => {
        it("if correct id sent should return a object", async () => {
            let empDetails = await new RoleDao().deleteRole('6262a44f202b827edbfd79f4')
            expect(empDetails.acknowledged).toEqual(true);
            expect(empDetails.deletedCount).toEqual(1);
        })
        it("if wrong id sent should return a object with deletedCount 0", async () => {
            let empDetails = await new RoleDao().deleteRole('6262a234e0fc03d778769b59')
            expect(empDetails.acknowledged).toEqual(true);
            expect(empDetails.deletedCount).toEqual(0);
        }) 
    }) 
    describe("testing update dao", () => {
        it("if correct id sent should return a object", async () => {
            const data = {
                "role_name": "def",
                "updateAt": new Date()
            };
            let empDetails = await new RoleDao().updateRole('6262a5c084682e1e972b4b90',data)
            expect(empDetails.lastErrorObject.updatedExisting).toEqual(true);
            
        })
    })
})