import express from 'express';
import * as empController from '../controllers/employee.controller'
import { adminAuth } from '../middlewares/auth.middleware';
import {userAuth} from '../middlewares/auth.middleware'



const router = express.Router();

//Add Employee
router.post("",adminAuth,empController.AddEmp)

//get all Employee
router.get("/",userAuth,empController.getAllEmployee)

export default router;