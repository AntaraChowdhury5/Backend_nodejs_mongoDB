import httpMock from 'node-mocks-http';
import RoleController from './RoleController'
import RoleService from '../services/RoleService'

describe('testing role controller',()=>{
    jest.mock('../services/RoleService', () => {
      return {
        newRole: jest.fn()
      };
    });
    
    let roleService = new RoleService();
    let roleController = new RoleController(roleService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call newRole from role service', async () => {
        roleService.newRole = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await roleController.newRole(req, res, next)
      expect(roleService.newRole).toHaveBeenCalled();
      expect(roleService.newRole).toHaveBeenCalledTimes(1);
   
    });
  })
  describe('testing role controller',()=>{
    jest.mock('../services/RoleService', () => {
      return {
        getDeptByID: jest.fn()
      };
    });
    
    let roleService = new RoleService();
    
    let roleController = new RoleController(roleService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call get Role By ID from role service', async () => {
        roleService.getRole = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await roleController.getRole(req, res, next)
      expect(roleService.getRole).toHaveBeenCalled();
      expect(roleService.getRole).toHaveBeenCalledTimes(1);
    });
  })

  describe('testing role controller',()=>{
    jest.mock('../services/RoleService', () => {
      return {
        getAllRoles: jest.fn()
      };
    });
    
    let roleService = new RoleService();
    
    let roleController = new RoleController(roleService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call get all roles', async () => {
        roleService.getAllRoles = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await roleController.getAllRoles(req, res, next)
      expect(roleService.getAllRoles).toHaveBeenCalled();
      expect(roleService.getAllRoles).toHaveBeenCalledTimes(1);
    });
  })

  describe('testing role controller',()=>{
    jest.mock('../services/RoleService', () => {
      return {
        roleDepartment : jest.fn()
      };
    });
    
    let roleService = new RoleService();
    
    let roleController = new RoleController(roleService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call delete role', async () => {
        roleService.deleteRole = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await roleController.deleteRole(req, res, next)
      expect(roleService.deleteRole).toHaveBeenCalled();
      expect(roleService.deleteRole).toHaveBeenCalledTimes(1);
    });
  })

  describe('testing role controller',()=>{
    jest.mock('../services/RoleService', () => {
      return {
        updateDepartment : jest.fn()
      };
    });
    
    let roleService = new RoleService();
    
    let roleController = new RoleController(roleService);
    
    let req: any, res: any, next: any;
    
    beforeEach(() => {
      req = httpMock.createRequest({});
      res = httpMock.createResponse({
      });
      next = ()=>{};
    });
    
    it('should call update role', async () => {
        roleService.updateRole = jest
        .fn()
        .mockImplementation(() => {
        });
     
      await roleController.updateRole(req, res, next)
      expect(roleService.updateRole).toHaveBeenCalled();
      expect(roleService.updateRole).toHaveBeenCalledTimes(1);
    });
  })