import httpMock from 'node-mocks-http';

import DepartmentService from './DepartmentService';
import {DepartmentDao} from '../Dao/Department.Dao';

describe('testing Department service', () => {
    jest.mock('../Dao/Department.Dao', () => {
        return {
            findRole: jest.fn()
        };
    });

    let departmentDao = new DepartmentDao();
    let departmentService = new DepartmentService(departmentDao);

    it('should call getAllDepartment from Dao', async () => {
        departmentDao.getAllDepartment = jest
            .fn()
            .mockImplementation(() => {
            });

        await departmentService.getAllDepts();
        expect(departmentDao.getAllDepartment).toHaveBeenCalled();
        expect(departmentDao.getAllDepartment).toHaveBeenCalledTimes(1);
    });
})

describe('testing Department service', () => {
    jest.mock('../Dao/Department.Dao', () => {
        return {
            findRole: jest.fn()
        };
    });

    let departmentDao = new DepartmentDao();
    let departmentService = new DepartmentService(departmentDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
       
    });

    it('should call findById from Dao', async () => {
        departmentDao.findById = jest
            .fn()
            .mockImplementation(() => {
            });

        await departmentService.getDept(req)
        expect(departmentDao.findById).toHaveBeenCalled();
        expect(departmentDao.findById).toHaveBeenCalledTimes(1);
    });
})

describe('testing Department service', () => {
    jest.mock('../Dao/Department.Dao', () => {
        return {
            findAllRole: jest.fn()
        };
    });

    let departmentDao = new DepartmentDao();
    let departmentService = new DepartmentService(departmentDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
       
    });

    it('should call addDepartment from Dao', async () => {
        departmentDao.saveDepartment = jest
            .fn()
            .mockImplementation(() => {
            });

        await departmentService.newDept(req)
        expect(departmentDao.saveDepartment).toHaveBeenCalled();
        expect(departmentDao.saveDepartment).toHaveBeenCalledTimes(1);
    });
})
describe('testing Department service', () => {
    jest.mock('../Dao/Department.Dao', () => {
        return {
            deleteRole: jest.fn()
        };
    });

    let departmentDao = new DepartmentDao();
    let departmentService = new DepartmentService(departmentDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
       
    });

    it('should call deleteRole from Dao', async () => {
        departmentDao.deleteDepartment = jest
            .fn()
            .mockImplementation(() => {
            });

        await departmentService.deleteDept(req)
        expect(departmentDao.deleteDepartment).toHaveBeenCalled();
        expect(departmentDao.deleteDepartment).toHaveBeenCalledTimes(1);
    });
})

describe('testing role service', () => {
    jest.mock('../Dao/Role.Dao', () => {
        return {
            updateRole: jest.fn()
        };
    });

    let departmentDao = new DepartmentDao();
    let departmentService = new DepartmentService(departmentDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
    });

    it('should call updateRole from Dao', async () => {
        departmentDao.updateDepartment = jest
            .fn()
            .mockImplementation(() => {
            });

        await departmentService.updateDept(req,req)
        expect(departmentDao.updateDepartment).toHaveBeenCalled();
        expect(departmentDao.updateDepartment).toHaveBeenCalledTimes(1);
    });
}) 
