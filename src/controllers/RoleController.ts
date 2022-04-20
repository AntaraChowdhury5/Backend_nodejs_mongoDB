/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import RoleService from '../services/RoleService';
import ResponseType from '../DTO/ResponseType.dto';
import { Request, Response, NextFunction } from 'express';


class RoleController {
  public roleService;
  constructor (roleService?:RoleService){
    this.roleService=roleService?roleService: new RoleService();
}

  /**
   * Controller to create new user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
   public newRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const reqdata:ResponseType = await this.roleService.newRole(req.body);
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
  public getAllRoles = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.roleService.getAllRoles();
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
  public getRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.roleService.getRole(req.params._id);
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
   public deleteRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.roleService.deleteRole(req.params._id);
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
   public updateRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.roleService.updateRole(req.params._id, req.body);
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

export default RoleController;
