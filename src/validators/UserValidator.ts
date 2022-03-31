import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { User } from '../models/user.model';

export const ValidateJoi = (schema: ObjectSchema) => {
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

export const Schemas = {
    data: Joi.object<User>({
        name: Joi.string().alphanum().min(3).max(15).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string().email().required(),
        department: Joi.string().required(),
        role: Joi.string().required(),
        YOJ: Joi.number().integer().min(2010).max(2022)
    })
};