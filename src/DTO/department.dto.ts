import { ObjectId } from "mongodb";

export class Department {
  public _id: string | ObjectId;
  public dept_id: number;
  public dept_name: string;
  public createAt: Date;
  public updateAt: Date;
}