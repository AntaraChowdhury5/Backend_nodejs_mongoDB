import { RoleDao } from '../Dao/Role.Dao';
import {Role } from '../models/role.model';
import ResponseType from '../models/ResponseType';

class RoleService {
  public responseType = new ResponseType();
  //get all role
  public getAllRoles = async (): Promise<any> => {
    const roleDao = new RoleDao()
    const res = await roleDao.getAllRole();
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "all Role fetched succesfully";
    return this.responseType;
  };

  //create new role
  public newRole = async (body: Role): Promise<any> => {
    const roleDao = new RoleDao()
    const res = await roleDao.saveRole(body);
    this.responseType.code = 201;
    this.responseType.data = res;
    this.responseType.message = "created";
    return this.responseType;
  };

  //get a single role
  public getRole = async (_id: string): Promise<any> => {
    const roleDao = new RoleDao();
    const res = await roleDao.findById(_id);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Role fetched succesfully";
    return this.responseType;
  };

  //delete a role
  public deleteRole = async (_id: string): Promise<any> => {
    const roleDao = new RoleDao;
    const res = await roleDao.deleteRole(_id);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Role deleted succesfully";
    return this.responseType;

  };

  //update a role
  public updateRole = async (_id: string, body: Role): Promise<any> => {
    const deptDao = new RoleDao();
    const res = await deptDao.updateRole(_id, body);
    this.responseType.code = 202;
    this.responseType.data = res;
    this.responseType.message = "Role updated succesfully";
    return this.responseType;
  };
}
export default RoleService;
