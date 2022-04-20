import httpMock from 'node-mocks-http';
import DepartmentController from './DepartmentController'
import DepartmentService from '../services/DepartmentService'

describe('testing department controller',()=>{
    jest.mock('../services/DepartmentService', () => {
      return {
        newDept: jest.fn()
      };
    });
    
    let departmentService = new DepartmentService();
    let departmentController = new DepartmentController(departmentService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call newDept  from department service', async () => {
        departmentService.newDept = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await departmentController.newDept(req, res, next)
      expect(departmentService.newDept).toHaveBeenCalled();
      expect(departmentService.newDept).toHaveBeenCalledTimes(1);
   
    });
  })
  describe('testing department controller',()=>{
    jest.mock('../services/DepartmentService', () => {
      return {
        getDeptByID: jest.fn()
      };
    });
    
    let departmentService = new DepartmentService();
    
    let departmentController = new DepartmentController(departmentService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call get Department By ID from department service', async () => {
        departmentService.getDept = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await departmentController.getDept(req, res, next)
      expect(departmentService.getDept).toHaveBeenCalled();
      expect(departmentService.getDept).toHaveBeenCalledTimes(1);
    });
  })

  describe('testing department controller',()=>{
    jest.mock('../services/DepartmentService', () => {
      return {
        getAllDepartments: jest.fn()
      };
    });
    
    let departmentService = new DepartmentService();
    
    let departmentController = new DepartmentController(departmentService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call get all departments from department service', async () => {
        departmentService.getAllDepts = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await departmentController.getAllDepts(req, res, next)
      expect(departmentService.getAllDepts).toHaveBeenCalled();
      expect(departmentService.getAllDepts).toHaveBeenCalledTimes(1);
    });
  })

  describe('testing department controller',()=>{
    jest.mock('../services/DepartmentService', () => {
      return {
        deleteDepartment : jest.fn()
      };
    });
    
    let departmentService = new DepartmentService();
    
    let departmentController = new DepartmentController(departmentService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call delete department from department service', async () => {
        departmentService.deleteDept = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await departmentController.deleteDept(req, res, next)
      expect(departmentService.deleteDept).toHaveBeenCalled();
      expect(departmentService.deleteDept).toHaveBeenCalledTimes(1);
    });
  })

  describe('testing department controller',()=>{
    jest.mock('../services/DepartmentService', () => {
      return {
        updateDepartment : jest.fn()
      };
    });
    
    let departmentService = new DepartmentService();
    
    let departmentController = new DepartmentController(departmentService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call update department from department service', async () => {
        departmentService.updateDept = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await departmentController.updateDept(req, res, next)
      expect(departmentService.updateDept).toHaveBeenCalled();
      expect(departmentService.updateDept).toHaveBeenCalledTimes(1);
    });
  })