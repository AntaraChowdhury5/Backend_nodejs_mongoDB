import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { Role } from '../models/role.model';

export const validateJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            console.error(error);
            return res.status(422).json({ error });
        }
    };
};

export const schemas = {
    data: Joi.object<Role>({
        role_id : Joi.number().required(),
        role_name: Joi.string().min(2).max(15).required(),
    })
};