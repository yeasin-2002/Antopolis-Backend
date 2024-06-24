/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpCode from "http-status-codes";
import { errorResponse } from "../../utils/responseHandler";

export const defaultErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err);
    // res.status(httpCode.INTERNAL_SERVER_ERROR).json({});
    return errorResponse({
        res,
        message: err?.message || "Internal Server Error",
        statusCode: httpCode.INTERNAL_SERVER_ERROR,
    });
};
