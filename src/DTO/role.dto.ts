import { ObjectId } from "mongodb";

export class Role {
  public _id?: string | ObjectId;
  public role_id?: number;
  public role_name?: string;
  public createAt?: Date;
  public updateAt?: Date;
}