import httpMock from 'node-mocks-http';
import EmployeeController from './EmployeeController';
import EmployeeService from '../services/EmployeeService';


describe('testing employee controller',()=>{
  jest.mock('../services/EmployeeService', () => {
    return {
      getAllEmployee: jest.fn()
    };
  });
  
  let employeeService = new EmployeeService();
  
  let employeeController = new EmployeeController(employeeService);
  
  let req: any, res: any, next: any;
  
  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({
    });
    next = ()=>{};
  });
  
  it('should call getAllEmployee from service', async () => {
    employeeService.getAllEmps = jest
      .fn()
      .mockImplementation(() => {
      });
   
    await employeeController.getAllEmps(req, res, next)
    expect(employeeService.getAllEmps).toHaveBeenCalled();
    expect(employeeService.getAllEmps).toHaveBeenCalledTimes(1);
 
  });
})
 describe('testing employee controller',()=>{
  jest.mock('../services/EmployeeService', () => {
    return {
      addEmployee: jest.fn()
    };
  });
  
  let employeeService = new EmployeeService();
  
  let employeeController = new EmployeeController(employeeService);
  
  let req: any, res: any, next: any;
  
  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({
    });
    next = ()=>{};
  });
  
  it('should call addEmployee from service', async () => {
    employeeService.newEmp= jest
      .fn()
      .mockImplementation(() => {
      });
   
    await employeeController.newEmp(req, res, next)
    expect(employeeService.newEmp).toHaveBeenCalled();
    expect(employeeService.newEmp).toHaveBeenCalledTimes(1);
  });
})
 
describe('testing employee controller',()=>{
  jest.mock('../services/EmployeeService', () => {
    return {
      getEmployeeById: jest.fn()
    };
  });
  
  let employeeService = new EmployeeService();
  
  let employeeController = new EmployeeController(employeeService);
  
  let req: any, res: any, next: any;
  
  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({
    });
    next = ()=>{};
  });
  
  it('should call getEmployeeByEmail from service', async () => {
    employeeService.getEmp = jest
      .fn()
      .mockImplementation(() => {
      });
   
    await employeeController.getEmp(req, res, next)
    expect(employeeService.getEmp).toHaveBeenCalled();
    expect(employeeService.getEmp).toHaveBeenCalledTimes(1);
  });
})

describe('testing employee controller',()=>{
  jest.mock('../services/EmployeeService', () => {
    return {
      deleteEmployee: jest.fn()
    };
  });
  
  let employeeService = new EmployeeService();
  
  let employeeController = new EmployeeController(employeeService);
  
  let req: any, res: any, next: any;
  
  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({
    });
    next = ()=>{};
  });
  
  it('should call deleteEmployee from service', async () => {
    employeeService.deleteEmp = jest
      .fn()
      .mockImplementation(() => {
      });
   
    await employeeController.deleteEmp(req, res, next)
    expect(employeeService.deleteEmp).toHaveBeenCalled();
    expect(employeeService.deleteEmp).toHaveBeenCalledTimes(1)
  });
})
describe('testing employee controller',()=>{
  jest.mock('../services/EmployeeService', () => {
    return {
      setIsDeleted: jest.fn()
    };
  });
  
  let employeeService = new EmployeeService();
  
  let employeeController = new EmployeeController(employeeService);
  
  let req: any, res: any, next: any;
  
  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({
    });
    next = ()=>{};
  });
  
  it('should call setIsDeleted from service', async () => {
    employeeService.deleteEmp = jest
      .fn()
      .mockImplementation(() => {
      });
   
    await employeeController.deleteEmp(req, res, next)
    expect(employeeService.deleteEmp).toHaveBeenCalled();
    expect(employeeService.deleteEmp).toHaveBeenCalledTimes(1)
  });
})

describe('testing employee controller',()=>{
  jest.mock('../services/EmployeeService', () => {
    return {
      updateEmployee: jest.fn()
    };
  });
  
  let employeeService = new EmployeeService();
  
  let employeeController = new EmployeeController(employeeService);
  
  let req: any, res: any, next: any;
  
  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({
    });
    next = ()=>{};
  });
  
  it('should call deleteEmployee from service', async () => {
    employeeService.updateEmp = jest
      .fn()
      .mockImplementation(() => {
      });
   
    await employeeController.updateEmp(req, res, next)
    expect(employeeService.updateEmp).toHaveBeenCalled();
    expect(employeeService.updateEmp).toHaveBeenCalledTimes(1)
  });
})