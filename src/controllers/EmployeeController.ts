/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import employeeService from '../services/EmployeeService';
import ResponseType from '../DTO/ResponseType.dto';
import { Request, Response, NextFunction } from 'express';


class EmployeeController {
  public employeeService = new employeeService();

  /**
   * Controller to create new user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
   public newEmp = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const reqdata:ResponseType = await this.employeeService.newEmp(req.body);
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
  public getAllEmps = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.employeeService.getAllEmps();
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
  public getEmp = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.employeeService.getEmp(req.params._id);
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
   public deleteEmp = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.employeeService.deleteEmp(req.params._id);
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
   public updateEmp = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.employeeService.updateEmp(req.params._id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: data.code,
        data: data.data,
        message: data.message
      });
    } catch (error) {
      next(error);
    }
  }; 

  /**
   * Controller to create new Admin
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
   public registration = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.employeeService.registration(req.body);
      res.status(data.code).json({
        code: data.code,
        data: data.data,
        message: data.message
      });
    } catch (error) {
      next(error);
    }
  };


  /**
   * Controller to Login
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
   public login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.employeeService.loggedin(req.body);
      res.status(data.code).json({
        code: data.code,
        data: data.data,
        message: data.message
      });
    } catch (error) {
      next(error);
    }
  };
}

export default EmployeeController;
