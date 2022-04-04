import { Test, TestingModule } from '@nestjs/testing';
import UserController from './EmployeeController';
import EmpService from '../services/EmployeeService';
//import { CreateNoteDto, GetNoteById } from '../dto/create-note.dto';
import userDao from '../Dao/Employee.Dao'

describe("NoteController Unit Tests", () => {
  let userController: UserController;
  let spyService: EmpService
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: EmpService,
      useFactory: () => ({
        saveUser: jest.fn(() => []),
        getAllUser: jest.fn(() => []),
        findById: jest.fn(() => { }),
        Update: jest.fn(() => { }),
        deleteUser: jest.fn(() => { })
      })
    }
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [EmpService, ApiServiceProvider],
    }).compile();

    userController = app.get<UserController>(UserController);
    spyService = app.get<EmpService>(EmpService);
  })

  it("calling newUser method", () => {
    const dto = {
        "name":"abcd",
        "email":"",
        "department":"Emp3",
         "role":"vjhjh"
    }
    const res={
        code: "200",
        data: "data",
        message:"message"
      }
    expect(userController.newUser(dto)).not.toEqual(null);
  })

  it("calling newUser method", () => {
    const dto = new CreateNoteDto();
    userController.newUser(dto);
    expect(spyService.newUser).toHaveBeenCalled();
    expect(spyService.newUser).toHaveBeenCalledWith(dto);
  })

  it("calling GetAllUser method", () => {
    userController.getAllUsers(null,null,null);
    expect(spyService.getAllUsers).toHaveBeenCalled();
  })

  

});