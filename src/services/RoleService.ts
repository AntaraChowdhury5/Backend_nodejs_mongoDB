import { RoleDao } from '../Dao/Role.Dao';
import {Role } from '../DTO/role.dto';
import ResponseType from '../DTO/ResponseType.dto';

class RoleService {
  public responseType;
  private roleDao;

  constructor(roleDao?: RoleDao) {
    this.roleDao = roleDao ? roleDao : new RoleDao();
    this.responseType = new ResponseType()
  }

   
  //get all role
  public getAllRoles = async (): Promise<any> => {
    const res = await this.roleDao.getAllRole();
    this.responseType={code:200,data:res,message:"All Role fetched succesfully"}
    return this.responseType;
  };

  //create new role
  public newRole = async (body: Role): Promise<any> => {
    const res = await this.roleDao.saveRole(body);
    this.responseType={code:201,data:res,message:"Role created succesfully"}
    return this.responseType;
  };

  //get a single role
  public getRole = async (_id: string): Promise<any> => {
    const res = await this.roleDao.findById(_id);
    this.responseType={code:200,data:res,message:"Role fetched succesfully"}
    return this.responseType;
  };

  //delete a role
  public deleteRole = async (_id: string): Promise<any> => {
    const res = await this.roleDao.deleteRole(_id);
    this.responseType={code:200,data:res,message:"Role deleted succesfully"}
    return this.responseType;

  };

  //update a role
  public updateRole = async (_id: string, body: Role): Promise<any> => {
    const res = await this.roleDao.updateRole(_id, body);
    this.responseType={code:202,data:res,message:"Role updated succesfully"}
    return this.responseType;
  };
}
export default RoleService;
