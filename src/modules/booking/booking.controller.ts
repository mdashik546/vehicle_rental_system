import { Request, Response } from "express";
import { bookingServices } from "./booking.service";
import sendResponse from "../../sendResponse";

const createController = async (req: Request, res: Response) => {
  try {
    const result = await bookingServices.createBooking(req.body);
    sendResponse(res, 201, true, "Booking created successfully", result);
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const getBooking = async (req: Request, res: Response) => {
  const role = req.user?.role;
  try {
    const result = await bookingServices.getBooking(role);
    const responseMsg =
      role === "admin"
        ? "Bookings retrieved successfully"
        : "Your bookings retrieved successfully";
    res.status(200).json({
      success: true,
      message: responseMsg,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const updateBooking = async (req: Request, res: Response) => {
  const { status } = req.body;
  try {
    const result = await bookingServices.updateBooking(
      status,
      req.params.bookingId as string
    );

    const responseMsg =
      status === "cancelled"
        ? "Booking cancelled successfully"
        : "Booking marked as returned. Vehicle is now available";
    res.status(200).json({
      success: true,
      message: responseMsg,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const bookingControllers = {
  createController,
  getBooking,
  updateBooking,
};
