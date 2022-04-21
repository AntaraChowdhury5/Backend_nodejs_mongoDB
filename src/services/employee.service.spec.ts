import httpMock from 'node-mocks-http';

import EmployeeService from '../services/EmployeeService';
import {EmployeeDao} from '../Dao/Employee.Dao';

describe('testing Employee service', () => {
    jest.mock('../Dao/Employee.Dao', () => {
        return {
            findRole: jest.fn()
        };
    });

    let employeeDao = new EmployeeDao();
    let employeeService = new EmployeeService(employeeDao);

    it('should call getAllEmployee from Dao', async () => {
        employeeDao.getAllUser = jest
            .fn()
            .mockImplementation(() => {
            });

        await employeeService.getAllEmps()
        expect(employeeDao.getAllUser).toHaveBeenCalled();
        expect(employeeDao.getAllUser).toHaveBeenCalledTimes(1);
    });
})

describe('testing Employee service', () => {
    jest.mock('../Dao/Employee.Dao', () => {
        return {
            findRole: jest.fn()
        };
    });

    let employeeDao = new EmployeeDao();
    let employeeService = new EmployeeService(employeeDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
       
    });

    it('should call findById from Dao', async () => {
        employeeDao.findById = jest
            .fn()
            .mockImplementation(() => {
            });

        await employeeService.getEmp(req)
        expect(employeeDao.findById).toHaveBeenCalled();
        expect(employeeDao.findById).toHaveBeenCalledTimes(1);
    });
})

describe('testing role service', () => {
    jest.mock('../Dao/Employee.Dao', () => {
        return {
            findAllRole: jest.fn()
        };
    });

    let employeeDao = new EmployeeDao();
    let employeeService = new EmployeeService(employeeDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
       
    });

    it('should call addEmployee from Dao', async () => {
        employeeDao.saveUser= jest
            .fn()
            .mockImplementation(() => {
            });

        await employeeService.newEmp(req,req)
        expect(employeeDao.saveUser).toHaveBeenCalled();
        expect(employeeDao.saveUser).toHaveBeenCalledTimes(1);
    });
})
describe('testing Employee service', () => {
    jest.mock('../Dao/Employee.Dao', () => {
        return {
            deleteRole: jest.fn()
        };
    });

    let employeeDao = new EmployeeDao();
    let employeeService = new EmployeeService(employeeDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
       
    });

    it('should call deleteEmployee from Dao', async () => {
        employeeDao.deleteUser = jest
            .fn()
            .mockImplementation(() => {
            });

        await employeeService.deleteEmp(req)
        expect(employeeDao.deleteUser).toHaveBeenCalled();
        expect(employeeDao.deleteUser).toHaveBeenCalledTimes(1);
    });
})

describe('testing Employee service', () => {
    jest.mock('../Dao/Employee.Dao', () => {
        return {
            updateRole: jest.fn()
        };
    });

    let employeeDao = new EmployeeDao();
    let employeeService = new EmployeeService(employeeDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
    });

    it('should call updateEmployee from Dao', async () => {
        employeeDao.Update = jest
            .fn()
            .mockImplementation(() => {
            });

        await employeeService.updateEmp(req,req)
        expect(employeeDao.Update).toHaveBeenCalled();
        expect(employeeDao.Update).toHaveBeenCalledTimes(1);
    });
}) 
