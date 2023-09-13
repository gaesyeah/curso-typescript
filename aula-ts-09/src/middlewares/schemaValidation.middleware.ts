import { NextFunction, Request, Response } from "express";

export function schemaValidation(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) return res.status(422).send({ message: error.details.map(({ message }) => message) });

    next();
  }
};