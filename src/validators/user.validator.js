const joi = require("joi");

export const newUserValidator = (req,res,next)=>{
  const data=joi.object({
     name: joi.string().min(3).max(25).trim(true).required(),
     email: joi.string().email().trim(true).required(),
     password: joi.string().min(4).trim(true).required(),
     department: joi.string().required(),
     role: joi.string(),
  });
const vres=data.validate(req.body)
if (vres.error) {
  return res.status(400).send({
  success: false,
  message: vres.error.details[0].message,
});
  
} else {
    req.validatedBody = vres;
    next();
  }
};