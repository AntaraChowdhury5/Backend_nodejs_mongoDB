const userDao= require('../Dao/user.dao')
const service=require('../services/UserService')
const controller = require('./controller');

jest.mock('./dao', () => {
  const mDao = { saveUser: jest.fn() };
  return jest.fn(() => mDao);
});

describe('get all employee', () => {
  test('Testing mock::', () => {
    const daoIns = new userDao();
    daoIns.getProcess.mockReturnValueOnce('mock');
    const result = controller.callDAOProcess();
    expect(result).toBe('mock');
  });
});

/* import {Test , TestingModule} from '@nestjs/testing';

import UserService from './user.service';
import * as sinon from 'sinon';
import { User } from '../models/user.model';
import { UserDao } from '../Dao/user.dao';

describe("Employee Service", () =>{
    let userService: UserService;
    let sandBox : sinon.SinonSandbox;
    beforeEach(async()=>{
        sandBox=sinon.createSandbox();
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,{
                    provide: userService

                }
            ]
        })
    })
}) */