//import User from '../models/user.model';
import logger from '../config/logger';
const dbconnect= require('../config/database')
const mongoDB= require('mongodb')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

//registration
export const registration = async (body) => {
  const hashedPassWord = await bcrypt.hash(body.password, 10);
  body.password = hashedPassWord;
  let data= await dbconnect();
  let result= await data.insertOne(body);
  return body;
};

//login
export const loggedin = async (body) => {
  let data= await dbconnect();
  const findData = await data.findOne({
    email: body.email
  });
  if (findData) {
    const passworkCheck = await bcrypt.compare(body.password, findData.password)
    if (passworkCheck) {
      const secretKey = 'antara';
      const payload = { id: findData._id, email: findData.email, role: findData.role};
      const token = await jwt.sign(payload,secretKey)
      logger.info(`Login token  ${token}`);
      return new Promise((resolve, reject) => {
        resolve({
            UserDetails: {
                userId: findData._id,
                email: findData.email,
                role: findData.role,
                token: token
            }
          })
        })
    }
    else {
      return new Promise((resolve, reject) => {
        reject("worng entry");
      }
      )
    }
  }
  else {
    return new Promise((resolve, reject) => {
      reject("worng entry");
    })
  }
};

//get all users
export const getAllUsers = async () => {
  let data= await dbconnect();
    data=await data.find().toArray();
    return data;
};

//create new user
export const newUser = async (body) => {
  let data= await dbconnect();
  let result= await data.insertOne(body);
  console.log(result)
  console.log(body)
  return body;
};


//update single user
export const updateUser = async (req) => {
  let data=await dbconnect();
    let result= await data.updateOne(
        {name:req.params.empId},
        {$set: req.body}
        )
    return result;
};

//delete single user
export const deleteUser = async (req) => {
  let data=await dbconnect();
    let result= await data.deleteOne({_id:new mongoDB.ObjectId(req.params._id)})
    return result;
 
};

//get single user
export const getUser = async (req) => {
  console.log(req);
  let data=await dbconnect();
    data= await data.findOne({_id:new mongoDB.ObjectId(req.params._id)});
    console.log(data);
    return data;
};
