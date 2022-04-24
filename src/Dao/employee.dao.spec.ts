import { ObjectId } from "mongodb";
import { database } from "../config/database";
import { EmployeeDao } from "./Employee.Dao";

describe("Employee Dao", () => {
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
                "name": "abc",

                "email": "test@gmail.com",
                "password": "test",
                "department": {
                    dept_id: 100,
                    dept_name: "abc",
                },
                "role": {
                    role_id: 100,
                    role_name: "abc",
                },
                "address": "test",
                "mobile": 1234567890,
                "createAt": new Date(),
                "updateAt": new Date(),
                "isActive": true,
                "isDelete": false
            };
            const dao = new EmployeeDao();
            const empDetails = await dao.saveUser(data);
            expect(empDetails.acknowledged).toEqual(true);
        })
    });
     describe("testing findall dao", () => {
        it("findall dao should return a array", async () => {
            let empDetails = await new EmployeeDao().getAllUser()
            expect(empDetails?.length).toBe(8)
        })
    }) 
    describe("testing findById dao", () => {
        it("findall dao should return a object", async () => {
            let empDetails = await new EmployeeDao().findById('6263e270455cdb8e2721f87a')
            console.log(empDetails);
            expect(empDetails).toMatchObject({
                _id: new ObjectId("6263e270455cdb8e2721f87a"),
                name:"abc",
                email:"test@gmail.com",
                address:"test",
                mobile:1234567890
            })
        })
    })

    describe("testing delete repository", () => {
        it("if correct id sent should return a object", async () => {
            let empDetails = await new EmployeeDao().deleteUser('6263e270455cdb8e2721f87a')
            expect(empDetails.matchedCount).toEqual(1);
        })
        it("if wrong id sent should return a object with affected 0", async () => {
            let empDetails = await new EmployeeDao().deleteUser('6262a234e0fc03d778769b59')
            expect(empDetails.matchedCount).toEqual(0);
        }) 
    })

    describe("testing update dao", () => {
        it("if correct id sent should return a object", async () => {
            const data = {
                "name": "def",
                "updateAt": new Date()
            };
            let empDetails = await new EmployeeDao().Update('6263e2220e74b99a746fa72b',data)
            expect(empDetails.lastErrorObject.updatedExisting).toEqual(true);
            
        })
    })
})