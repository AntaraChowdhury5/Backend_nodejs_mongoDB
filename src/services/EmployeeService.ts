import { UserDao } from '../Dao/Employee.Dao';
import {Employee } from '../models/employee.model';
import ResponseType from '../models/ResponseType';

class EmployeeService {
  public responseType = new ResponseType();
  //get all users
  public getAllEmps = async (): Promise<any> => {
    const userDao = new UserDao()
    const res = await userDao.getAllUser();
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "all employee fetched succesfully";
    return this.responseType;
  };

  //create new user
  public newEmp = async (body: Employee): Promise<any> => {
    const userDao = new UserDao()
    const res = await userDao.saveUser(body);
    this.responseType.code = 201;
    this.responseType.data = res;
    this.responseType.message = "created";
    return this.responseType;
  };

  //get a single user
  public getEmp = async (_id: string): Promise<any> => {
    const userDao = new UserDao();
    const res = await userDao.findById(_id);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Employee fetched succesfully";
    return this.responseType;
  };

  //delete a user
  public deleteEmp = async (_id: string): Promise<any> => {
    const userDao = new UserDao();
    const res = await userDao.deleteUser(_id);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Employee deleted succesfully";
    return this.responseType;

  };

  //update a user
  public updateEmp = async (_id: string, body: Employee): Promise<any> => {
    const userDao = new UserDao();
    const res = await userDao.Update(_id, body);
    this.responseType.code = 202;
    this.responseType.data = res;
    this.responseType.message = "Employee updated succesfully";
    return this.responseType;
  };

  //registration
  public registration = async (body: Employee) => {
    const userDao = new UserDao();
    const res = await userDao.registration(body);
    this.responseType.code = 201;
    this.responseType.data = res;
    this.responseType.message = "Admin added succesfully";
    return this.responseType;
  };

  //login
  public loggedin = async (body: Employee) => {
    const userDao = new UserDao();
    const res = await userDao.loggedin(body);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Login succesfully";
    return this.responseType;
  }
}
export default EmployeeService;
