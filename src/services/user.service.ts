import { UserDao } from '../Dao/user.dao';
import { User } from '../models/user.model';
import { IUserDao } from '../Dao/user.dao';
import ResponseType from '../models/response';
import { ObjectId } from 'mongodb';

class UserService {
  public responseType= new ResponseType();
  //get all users
  public getAllUsers = async (): Promise<any> => {
    const userDao=new UserDao()
    const res=await userDao.getAllUser();
    this.responseType.code=200;
    this.responseType.data=res;
    this.responseType.message="all employee fetched succesfully";
    return this.responseType;
  }; 

  //create new user
  public newUser = async (body: User): Promise<any> => {
    //let responseType= new ResponseType();
    const userDao=new UserDao()
    const res=await userDao.saveUser(body);
    this.responseType.code=201;
    this.responseType.data=res;
    this.responseType.message="created";
    return this.responseType;
  };

  //get a single user
  public getUser = async (_id:string): Promise<any> => {
    const userDao=new UserDao();
    const res = await userDao.findById(_id);
    this.responseType.code=200;
    this.responseType.data=res;
    this.responseType.message="Employee fetched succesfully";
    return this.responseType;
  };
}
 
export default UserService;

 /*  //update a user
  public updateUser = async (_id: string, body: IUser): Promise<IUser> => {
    const data = await User.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

  //delete a user
  public deleteUser = async (_id: string): Promise<string> => {
    await User.findByIdAndDelete(_id);
    return '';
  };
  */
