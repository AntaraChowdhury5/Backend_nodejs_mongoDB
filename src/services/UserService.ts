import { UserDao } from '../Dao/user.dao';
import { User } from '../models/user.model';
import ResponseType from '../models/ResponseType';

class UserService {
  public responseType = new ResponseType();
  //get all users
  public getAllUsers = async (): Promise<any> => {
    const userDao = new UserDao()
    const res = await userDao.getAllUser();
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "all employee fetched succesfully";
    return this.responseType;
  };

  //create new user
  public newUser = async (body: User): Promise<any> => {
    const userDao = new UserDao()
    const res = await userDao.saveUser(body);
    this.responseType.code = 201;
    this.responseType.data = res;
    this.responseType.message = "created";
    return this.responseType;
  };

  //get a single user
  public getUser = async (_id: string): Promise<any> => {
    const userDao = new UserDao();
    const res = await userDao.findById(_id);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Employee fetched succesfully";
    return this.responseType;
  };

  //delete a user
  public deleteUser = async (_id: string): Promise<any> => {
    const userDao = new UserDao();
    const res = await userDao.deleteUser(_id);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Employee deleted succesfully";
    return this.responseType;

  };

  //update a user
  public updateUser = async (_id: string, body: User): Promise<any> => {
    const userDao = new UserDao();
    const res = await userDao.Update(_id, body);
    this.responseType.code = 202;
    this.responseType.data = res;
    this.responseType.message = "Employee updated succesfully";
    return this.responseType;
  };

  //registration
  public registration = async (body: User) => {
    const userDao = new UserDao();
    const res = await userDao.registration(body);
    this.responseType.code = 201;
    this.responseType.data = res;
    this.responseType.message = "Admin added succesfully";
    return this.responseType;
  };

  //login
  public loggedin = async (body: User) => {
    const userDao = new UserDao();
    const res = await userDao.loggedin(body);
    this.responseType.code = 200;
    this.responseType.data = res;
    this.responseType.message = "Login succesfully";
    return this.responseType;
  }
}
export default UserService;
