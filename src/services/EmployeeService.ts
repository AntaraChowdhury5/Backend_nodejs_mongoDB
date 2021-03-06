import { EmployeeDao } from '../Dao/Employee.Dao';
import {Employee } from '../DTO/employee.dto';
import ResponseType from '../DTO/ResponseType.dto';

class EmployeeService {
  private responseType;
  private employeeDao;

  constructor(employeeDao?: EmployeeDao) {
    this.employeeDao = employeeDao ? employeeDao : new EmployeeDao();
    this.responseType = new ResponseType()
  }
  
  
  //get all users
  public getAllEmps = async (): Promise<any> => {
    const res:Employee = await this.employeeDao.getAllUser();
    this.responseType={code:200,data:res,message:"All Employees fetched succesfully"}
    return this.responseType;
  };

  //create new user
  public newEmp = async (body: Employee, file:string): Promise<any> => {
    const res = await this.employeeDao.saveUser(body,file);
    this.responseType={code:201,data:res,message:"Employee created succesfully"}
    return this.responseType;
  };


  //get a single user
  public getEmp = async (_id: string): Promise<any> => {
    const res = await this.employeeDao.findById(_id);
    this.responseType={code:200,data:res,message:"Employee fetched succesfully"}
    return this.responseType;
  };

  //delete a user
  public deleteEmp = async (_id: string): Promise<any> => {
    const res = await this.employeeDao.deleteUser(_id);
    this.responseType={code:200,data:res,message:"Employee deleted succesfully"}
    return this.responseType;

  };

  //update a user
  public updateEmp = async (_id: string, body: Employee): Promise<any> => {
    const res = await this.employeeDao.Update(_id, body);
    this.responseType={code:202,data:res,message:"Employee updated succesfully"}
    return this.responseType;
  };

  //registration
  public registration = async (body: Employee) => {
    const res = await this.employeeDao.registration(body);
    this.responseType={code:201,data:res,message:"Admin added succesfully"}
    return this.responseType;
  };

  //login
  public loggedin = async (body: Employee) => {
    const res = await this.employeeDao.loggedin(body);
    this.responseType={code:200,data:res,message:"Login succesfully"}
    return this.responseType;
  }
}
export default EmployeeService;
