import { Request, Response, NextFunction, RequestHandler } from "express";

export const asyncHandler = <TReq = any, TRes = any>(
  fn: (
    req: Request<any, any, any, any>,
    res: Response,
    next: NextFunction,
  ) => Promise<TRes>,
): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(fn(req as any, res, next)).catch(next);
  };
};
