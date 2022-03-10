import User from '../models/user.model';
const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken");
import logger from '../config/logger';


//registration
export const registration = async (body) => {
  const hashedPassWord = await bcrypt.hash(body.password, 10);
  body.password = hashedPassWord;
  const data = await User.create(body);
  return data;
};


//login
export const loggedin = async (body) => {
  const findData = await User.findOne({
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