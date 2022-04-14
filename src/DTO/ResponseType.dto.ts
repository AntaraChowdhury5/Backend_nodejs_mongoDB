import { Employee } from "./employee.dto";

class ResponseType{
    public  message : string;
	public  data: Employee;
	public  code:number;
}
export default ResponseType;