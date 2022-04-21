import httpMock from 'node-mocks-http';

import RoleService from '../services/RoleService';
import {RoleDao} from '../Dao/Role.Dao';

describe('testing role service', () => {
    jest.mock('../Dao/Role.Dao', () => {
        return {
            findRole: jest.fn()
        };
    });

    let roleDao = new RoleDao();
    let roleService = new RoleService(roleDao);

    it('should call getAllRole from Dao', async () => {
        roleDao.getAllRole = jest
            .fn()
            .mockImplementation(() => {
            });

        await roleService.getAllRoles()
        expect(roleDao.getAllRole).toHaveBeenCalled();
        expect(roleDao.getAllRole).toHaveBeenCalledTimes(1);
    });
})

describe('testing role service', () => {
    jest.mock('../Dao/Role.Dao', () => {
        return {
            findRole: jest.fn()
        };
    });

    let roleDao = new RoleDao();
    let roleService = new RoleService(roleDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
       
    });

    it('should call findById from Dao', async () => {
        roleDao.findById = jest
            .fn()
            .mockImplementation(() => {
            });

        await roleService.getRole(req)
        expect(roleDao.findById).toHaveBeenCalled();
        expect(roleDao.findById).toHaveBeenCalledTimes(1);
    });
})

describe('testing role service', () => {
    jest.mock('../Dao/Role.Dao', () => {
        return {
            findAllRole: jest.fn()
        };
    });

    let roleDao = new RoleDao();
    let roleService = new RoleService(roleDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
       
    });

    it('should call addRole from Dao', async () => {
        roleDao.saveRole = jest
            .fn()
            .mockImplementation(() => {
            });

        await roleService.newRole(req)
        expect(roleDao.saveRole).toHaveBeenCalled();
        expect(roleDao.saveRole).toHaveBeenCalledTimes(1);
    });
})
describe('testing role service', () => {
    jest.mock('../Dao/Role.Dao', () => {
        return {
            deleteRole: jest.fn()
        };
    });

    let roleDao = new RoleDao();
    let roleService = new RoleService(roleDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
       
    });

    it('should call deleteRole from Dao', async () => {
        roleDao.deleteRole = jest
            .fn()
            .mockImplementation(() => {
            });

        await roleService.deleteRole(req)
        expect(roleDao.deleteRole).toHaveBeenCalled();
        expect(roleDao.deleteRole).toHaveBeenCalledTimes(1);
    });
})

describe('testing role service', () => {
    jest.mock('../Dao/Role.Dao', () => {
        return {
            updateRole: jest.fn()
        };
    });

    let roleDao = new RoleDao();
    let roleService = new RoleService(roleDao);

    let req: any, res: any, next: any;

    beforeEach(() => {
        req = httpMock.createRequest({});
    });

    it('should call updateRole from Dao', async () => {
        roleDao.updateRole = jest
            .fn()
            .mockImplementation(() => {
            });

        await roleService.updateRole(req,req)
        expect(roleDao.updateRole).toHaveBeenCalled();
        expect(roleDao.updateRole).toHaveBeenCalledTimes(1);
    });
}) 
