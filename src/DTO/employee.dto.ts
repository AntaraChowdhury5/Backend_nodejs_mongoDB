import { ObjectId } from "mongodb";
import { Path } from "typescript";

export class Employee  {
  public _id?: string | ObjectId;
  public name: string;
  public email:string;
  public password:string;
  public department : {
    dept_id: number,
    dept_name: string
  };
  public role: {
    role_id : number,
    role_name : string
  };
  public address: string;
  public mobile: number;
  YOJ?: number;
  public image:string | Path;
  public createAt: Date; 
  public updateAt: Date;
  public isActive: boolean;
  public isDelete: boolean;
}
