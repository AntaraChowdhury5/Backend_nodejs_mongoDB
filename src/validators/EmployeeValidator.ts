import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { Employee } from '../DTO/employee.dto';
import Logger from '../config/logger';

export const validateJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            Logger.logger.info(error)
            return res.status(422).json({ error });
        }
    };
};

export const schemas = {
    data: Joi.object<Employee>({
        name: Joi.string().min(3).max(25).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string().email().required(),
        department: Joi.object().required(),
        role: Joi.object().required(),
        YOJ: Joi.number().integer().min(2010).max(2022),
        address: Joi.string(),
        mobile: Joi.number(),
        image:Joi.string(),
        createAt: Joi.date(),
        updateAt: Joi.date(),
        isActive: Joi.boolean(),
        isDelete: Joi.boolean(),
    })
};