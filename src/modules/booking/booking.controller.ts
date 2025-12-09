import { Request, Response } from "express";
import { bookingServices } from "./booking.service";
import sendResponse from "../../sendResponse";

const createController = async (req: Request, res: Response) => {
  try {
    const result = await bookingServices.createBooking(req.body);
    sendResponse(
      res,
      201,
      true,
      "Booking created successfully",
      result
    );
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const bookingControllers = {
  createController,
};
