import HttpStatus from 'http-status-codes';
import ResponseType from '../DTO/ResponseType.dto';
import { Request, Response, NextFunction } from 'express';
import DepartmentService from '../services/DepartmentService';


class DepartmentController {
  public departmentService;
  constructor (departmentService?:DepartmentService){
    this.departmentService=departmentService?departmentService: new DepartmentService();
}

  /**
   * Controller to create new user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
   public newDept = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const reqdata:ResponseType = await this.departmentService.newDept(req.body);
      res.status(reqdata.code).json({
        code: reqdata.code,
        data: reqdata.data,
        message:reqdata.message
      });
    } catch (error) {
      next(error);
    }
  };


  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllDepts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.departmentService.getAllDepts();
      res.status(HttpStatus.OK).json({
        code: data.code,
        data: data.data,
        message: data.message
      });
    } catch (error) {
      next(error);
    }
  }; 

  /**
   * Controller to get a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getDept = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.departmentService.getDept(req.params._id);
      res.status(HttpStatus.OK).json({
        code: data.code,
        data: data.data,
        message: data.message
      });
    } catch (error) {
      next(error);
    }
  }; 

  /**
   * Controller to delete a single user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
   public deleteDept = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.departmentService.deleteDept(req.params._id);
      res.status(HttpStatus.OK).json({
        code: data.code,
        data: data.data,
        message: data.message
      });
    } catch (error) {
      next(error);
    }
  }; 

  /**
   * Controller to update a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
   public updateDept = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.departmentService.updateDept(req.params._id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: data.code,
        data: data.data,
        message: data.message
      });
    } catch (error) {
      next(error);
    }
  }; 
}

export default DepartmentController;
