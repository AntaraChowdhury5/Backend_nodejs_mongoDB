/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import userService from '../services/user.service';
import ResponseType from '../models/response';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user.model';

class UserController {
  public UserService = new userService();

  /**
   * Controller to create new user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
   public newUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.UserService.newUser(req.body);
      console.log(data);
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
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.UserService.getAllUsers();
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
  public getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.UserService.getUser(req.params._id);
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
   public deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data:ResponseType = await this.UserService.deleteUser(req.params._id);
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
   public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.UserService.updateUser(req.params._id, req.body);
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
      const data:ResponseType = await this.UserService.registration(req.body);
      console.log(data);
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
      const data:ResponseType = await this.UserService.loggedin(req.body);
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

export default UserController;
