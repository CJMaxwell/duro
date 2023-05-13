import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';
import HttpException from '../exception/httpExceptions';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';
    logger.error(`StatusCode : ${status}, Message : ${message}`);
    res.status(status).json({ message });
};

export default errorMiddleware;