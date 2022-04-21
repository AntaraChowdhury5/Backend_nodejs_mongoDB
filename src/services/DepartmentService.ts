import { DepartmentDao } from '../Dao/Department.Dao';
import { Department } from '../DTO/department.dto';
import ResponseType from '../DTO/ResponseType.dto';

class DepartmentService {

  private deptDao;
  private responseType;
  
  constructor(deptDao?: DepartmentDao) {
    this.deptDao = deptDao ? deptDao : new DepartmentDao();
    this.responseType = new ResponseType()
  }
  
  //get all Department
  public getAllDepts = async () => {
    const res = await this.deptDao.getAllDepartment();
    this.responseType = { code: 200, data: res, message: "Department fetched succesfully" }
    return this.responseType;
  };

  //create new Department
  public newDept = async (body: Department): Promise<any> => {
    const res = await this.deptDao.saveDepartment(body);
    this.responseType = { code: 201, data: res, message: "Department created succesfully" }
    return this.responseType;
  };

  //get a single Department
  public getDept = async (_id: string): Promise<any> => {
    const res = await this.deptDao.findById(_id);
    this.responseType = { code: 200, data: res, message: "Department fetched succesfully" }
    return this.responseType;
  };

  //delete a Department
  public deleteDept = async (_id: string): Promise<any> => {
    const res = await this.deptDao.deleteDepartment(_id);
    this.responseType = { code: 200, data: res, message: "Department deleted succesfully" }
    return this.responseType;

  };

  //update a Department
  public updateDept = async (_id: string, body: Department): Promise<any> => {
    const res = await this.deptDao.updateDepartment(_id, body);
    this.responseType = { code: 202, data: res, message: "Department updated succesfully" }
    return this.responseType;
  };
}
export default DepartmentService;
