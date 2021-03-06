import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { Department } from '../DTO/department.dto';
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
    data: Joi.object<Department>({
        dept_id : Joi.number().required(),
        dept_name: Joi.string().alphanum().min(2).max(15).required(),
    })
};