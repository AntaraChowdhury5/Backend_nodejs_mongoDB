import express, { IRouter } from 'express';
import empController from '../controllers/EmployeeController';
import {schemas,validateJoi} from "../validators/EmployeeValidator"
import { adminAuth } from '../middlewares/auth.middleware';

class EmployeeRoutes {
  private empController = new empController();
  private router = express.Router();
  

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all users
    this.router.get('', this.empController.getAllEmps); 

    //route to create a new employee
    this.router.post('',adminAuth,validateJoi(schemas.data),this.empController.newEmp);

    //route to get a single employee
    this.router.get('/:_id', this.empController.getEmp);

    //route to update a single employee
    this.router.put('/:_id', this.empController.updateEmp); 

    //route to delete a single employee
    this.router.delete('/:_id', this.empController.deleteEmp); 

    //register for admin
    this.router.post('/registrationAdmin',this.empController.registration)

    //login
    this.router.post("/login", this.empController.login);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default EmployeeRoutes;
