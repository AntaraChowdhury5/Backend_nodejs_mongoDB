import Employee from '../models/employee.model'


//addEmp
export const addEmp = async (req, res) => {
  const empModel = new Employee({
    e_name:req.e_name,
    department:req.department,
    role:req.role
  })
  return await empModel.save();
}

//get all employees
export const getAllEmployee = async () => {
  const data = await Employee.find();
  return data;
};