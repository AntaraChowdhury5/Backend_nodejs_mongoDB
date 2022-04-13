import { Employee } from '../DTO/employee.dto'
import { UserDao } from './Employee.Dao'

describe("sava new employee data", () => {
    it("should return a object", async () => {
        let req = {
            "_id":"1649374",
            "name": "test",
            "email": "test@gmail.com",
            "department": { "dept_name": "Account" },
            "role": { "role_name": "QA" }
        }
        let employeeData = await new UserDao().saveUser(req)
        expect(employeeData).toEqual(req)
    })
})

describe("get all user", () => {
    it("should return array", async () => {
        let empData = await new UserDao().getAllUser()
        expect(empData?.length).toBe(6)
    })
})

describe("find by id", () => {
    it("if correct id sent  should return a object", async () => {
        let empDetails: any = await new UserDao().findById({ "id": "" })
        expect(empDetails).toMatchObject({ "id": 1 })
    })
    it("if wrong id sent should return null", async () => {
        const empDetails: any = await new UserDao().findById(Employee, { "id": "" })
        expect(empDetails).toEqual(undefined)
    })
})

describe("testing delete employee", () => {
    it("if correct id sent should return a object", async () => {
        let empDetails = await new UserDao().deleteUser(Employee, { "id": "" })
        expect(empDetails).toMatchObject({ "affected": 1 })
    })
    it("if wrong id sent should return a object with affected 0", async () => {
        let empDetails = await new UserDao().deleteUser(Employee, { "id": "" })
        console.log(empDetails)
        expect(empDetails).toMatchObject({ "affected": 0 })
    })
})