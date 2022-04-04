import express, { IRouter } from 'express';
import roleController from '../controllers/RoleController';
import { adminAuth } from '../middlewares/auth.middleware';
import {schemas,validateJoi} from "../validators/RoleValidator"

class RoleRoutes {
  private roleController = new roleController();
  private router = express.Router();
  
  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all users
    this.router.get('', this.roleController.getAllRoles); 

    //route to create a new employee
    this.router.post('',adminAuth,validateJoi(schemas.data),this.roleController.newRole);

    //route to get a single employee
    this.router.get('/:_id', this.roleController.getRole);

    //route to update a single employee
    this.router.put('/:_id', this.roleController.updateRole); 

    //route to delete a single employee
    this.router.delete('/:_id', this.roleController.deleteRole); 
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default RoleRoutes;