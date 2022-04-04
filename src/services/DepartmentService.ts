import { DepartmentDao } from '../Dao/Department.Dao';
import {Department } from '../models/department.model';
import ResponseType from '../models/ResponseType';

class DepartmentService {
  public responseType = new ResponseType();
  //get all Department
  public getAllDepts = async (): Promise<any> => {
    const deptDao = new DepartmentDao()
    const res = await deptDao.getAllDepartment();
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "all Department fetched succesfully";
    return this.responseType;
  };

  //create new Department
  public newDept = async (body: Department): Promise<any> => {
    const deptDao = new DepartmentDao()
    const res = await deptDao.saveDepartment(body);
    this.responseType.code = 201;
    this.responseType.data = res;
    this.responseType.message = "created";
    return this.responseType;
  };

  //get a single Department
  public getDept = async (_id: string): Promise<any> => {
    const deptDao = new DepartmentDao();
    const res = await deptDao.findById(_id);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Department fetched succesfully";
    return this.responseType;
  };

  //delete a Department
  public deleteDept = async (_id: string): Promise<any> => {
    const deptDao = new DepartmentDao;
    const res = await deptDao.deleteDepartment(_id);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Department deleted succesfully";
    return this.responseType;

  };

  //update a Department
  public updateDept = async (_id: string, body: Department): Promise<any> => {
    const deptDao = new DepartmentDao();
    const res = await deptDao.updateDepartment(_id, body);
    this.responseType.code = 202;
    this.responseType.data = res;
    this.responseType.message = "Deptartment updated succesfully";
    return this.responseType;
  };
}
export default DepartmentService;
