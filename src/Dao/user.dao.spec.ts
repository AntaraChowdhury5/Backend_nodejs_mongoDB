import {User} from '../models/employee.model'
import { UserDao } from './Employee.Dao'

describe("sava new employee data",()=>{
    it("should return a object", async()=>{
        let req={
            "name":"test",
            "email":"test@gmail.com",
            "role":"tester",
            "department":"testing"
        }
    let employeeData= await new UserDao().saveUser()
    })
})