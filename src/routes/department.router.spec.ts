import DepartmentRoute from '../routes/DepartmentRoutes'
import httpMock from 'node-mocks-http';
import DepartmentController from '../controllers/DepartmentController';
import request from "supertest";
import { Request, Response } from "express";
import app from '../index'


import sinon from 'sinon'

describe("Routes", () => {
    const mockGetAll = jest
  .fn()
  .mockImplementation((req: Request, res: Response) => {
    
  });

jest.doMock("../controllers/DepartmentController", () => {
  return jest.fn().mockImplementation(() => {
    return {
        addDepartment: mockGetAll,
    };
  });
});
  beforeEach(() => {
    mockGetAll.mockImplementation((req: Request, res: Response) => {
      
    });
  });

  it.only("GET /product integration test", async () => {
    await request(app).get('/addDepartment')
    expect(mockGetAll).toHaveBeenCalledTimes(1);

  });

});



describe("Routes", () => {
    const mockGetAll = jest
  .fn()
  .mockImplementation((req: Request, res: Response) => {
    
  });

jest.doMock("../../middlewares/validators/employee.validator.ts", () => {
  return jest.fn().mockImplementation(() => {
    return {
      addEmployee: mockGetAll,
    };
  });
});
  beforeEach(() => {
    mockGetAll.mockImplementation((req: Request, res: Response) => {
      
    });
  });

  it("GET /product integration test", async () => {
    await request(app).get('/addDepartment')
    expect(mockGetAll).toHaveBeenCalledTimes(1);

  });

});
jest.doMock("../../middlewares/validators/role.validator", () => {
  return jest.fn().mockImplementation(() => {
    return {
        addRole: mockGetAll,
    };
  });
});
  beforeEach(() => {
    mockGetAll.mockImplementation((req: Request, res: Response) => {
      
    });
  });

  it("GET /product integration test", async () => {
    await request(app).get('/addDepartment')
    expect(mockGetAll).toHaveBeenCalledTimes(1);

  });

});
