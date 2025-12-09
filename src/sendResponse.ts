import { Response } from "express";

const sendResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  data: any
) => {
  res.status(statusCode).json({
    success: success,
    message: message,
    data: data,
  });
};

export default sendResponse;
