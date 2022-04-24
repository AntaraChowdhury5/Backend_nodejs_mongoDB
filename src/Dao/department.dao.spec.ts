import { ObjectId } from "mongodb";
import { database } from "../config/database";
import { DepartmentDao } from "./Department.Dao";

describe("Department Dao", () => {
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
                "dept_id": 100,
                "dept_name": "abc",
                "createAt": new Date(),
                "updateAt": new Date()
            };
            const dao = new DepartmentDao();
            const empDetails = await dao.saveDepartment(data);
            expect(empDetails.acknowledged).toEqual(true);
        })
    });
    describe("testing findall dao", () => {
        it("findall dao should return a array", async () => {
            let empDetails = await new DepartmentDao().getAllDepartment()
            expect(empDetails?.length).toBe(27)
        })
    }) 
    describe("testing findById dao", () => {
        it("findall dao should return a object", async () => {
            let empDetails = await new DepartmentDao().findById('62628936778be3add4139b86')
            console.log(empDetails);
            expect(empDetails).toMatchObject({
                _id: new ObjectId("62628936778be3add4139b86"),
                dept_id: 100,
                dept_name: 'abc'
            })
        })
    })

    describe("testing delete repository", () => {
        it("if correct id sent should return a object", async () => {
            let empDetails = await new DepartmentDao().deleteDepartment('62628936778be3add4139b86')
            expect(empDetails.acknowledged).toEqual(true);
            expect(empDetails.deletedCount).toEqual(1);
        })
        it("if wrong id sent should return a object with affected 0", async () => {
            let empDetails = await new DepartmentDao().deleteDepartment('6262919056711fdd90bb56f8')
            expect(empDetails.acknowledged).toEqual(true);
            expect(empDetails.deletedCount).toEqual(0);
        }) 
    })

    describe("testing update dao", () => {
        it("if correct id sent should return a object", async () => {
            const data = {
                "department_name": "cef",
                "updateAt": new Date()
            };
            let empDetails = await new DepartmentDao().updateDepartment('62628e39fb7bc7902ed1b3e9',data)
            expect(empDetails.lastErrorObject.updatedExisting).toEqual(true);
            
        })
    })
})