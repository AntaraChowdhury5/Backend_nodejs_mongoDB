export class Employee  {
  public _id: string | Object;
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
  YOJ?: number;
}

