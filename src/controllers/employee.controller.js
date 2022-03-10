import HttpStatus from 'http-status-codes';
import * as empService from '../services/employee.service';

//Add Emp
export const AddEmp = async (req, res, next) => {
  try {
    const empData = {
      e_name: req.body.e_name,
      department: req.body.department,
      role:req.body.role
    };
    const data = await empService.addEmp(empData);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Employee added successfully'
    });
  } catch (error) {
    next(error);
  }
};

//GetAllEmps
export const getAllEmployee = async (req, res, next) => {
  try {
    const data = await empService.getAllEmployee();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All employees fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};
