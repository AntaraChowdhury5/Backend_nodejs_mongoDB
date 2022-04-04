import express, { IRouter } from 'express';
import deptController from '../controllers/DepartmentController';
import { adminAuth } from '../middlewares/auth.middleware';
import {schemas,validateJoi} from "../validators/DepartmentValidator"

class DepartmentRoutes {
  private deptController = new deptController();
  private router = express.Router();
  

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all users
    this.router.get('', this.deptController.getAllDepts); 

    //route to create a new employee
    this.router.post('',adminAuth,validateJoi(schemas.data),this.deptController.newDept);

    //route to get a single employee
    this.router.get('/:_id', this.deptController.getDept);

    //route to update a single employee
    this.router.put('/:_id', this.deptController.updateDept); 

    //route to delete a single employee
    this.router.delete('/:_id', this.deptController.deleteDept); 
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default DepartmentRoutes;