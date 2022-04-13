/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export const adminAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let adminToken = req.header('token');
    if (!adminToken) {
      throw new Error("Authorization token is required" + 404);
    }
   jwt.verify(adminToken, 'antara', ((err, decode) => {
      if (err) {
        console.log(err)
        return res.status(401).send({
          status: false,
          message: "Authentication declined"
        });
      }
      else {
        console.log(decode);
        
        if (decode.role == "Admin")  {
          console.log("Hiiii");
          
          next();
        } else {
          return res.status(401).send({
            status: false,
            message: 'Unauthorised access'
          });
        }
      }
    }))
  } catch (error) {
    next(error);
  }
}