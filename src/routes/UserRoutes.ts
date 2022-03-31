import express, { IRouter } from 'express';
import userController from '../controllers/UserController';
import {Schemas,ValidateJoi} from "../validators/UserValidator"
import { adminAuth } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all users
    this.router.get('', this.UserController.getAllUsers); 

    //route to create a new employee
    this.router.post('',adminAuth,ValidateJoi(Schemas.data),this.UserController.newUser);

    //route to get a single employee
    this.router.get('/:_id', this.UserController.getUser);

    //route to update a single employee
    this.router.put('/:_id', this.UserController.updateUser); 

    //route to delete a single employee
    this.router.delete('/:_id', this.UserController.deleteUser); 

    //register for admin
    this.router.post('/registrationAdmin',this.UserController.registration)

    //login
    this.router.post("/login", this.UserController.login);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
