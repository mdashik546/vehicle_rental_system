import { Request, Response } from "express";
import { bookingServices } from "./booking.service";

const createController = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const result = await bookingServices.createBooking(req.body);
    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const getService = async (req: Request, res: Response) => {
  try {
    const result = await bookingServices.getBooking();
    if (result.rowCount === 0) {
      res.status(200).json({
        success: true,
        message: "No vehicles found",
        data: result.rows,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Vehicles retrieved successfully",
        data: result.rows,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// const singleVehicle = async (req: Request, res: Response) => {
//   try {
//     const result = await vehicleServices.singleVehicle(
//       req.params.vehicleId as string
//     );
//     if (result.rowCount === 0) {
//       res.status(200).json({
//         success: true,
//         message: "No vehicle found",
//         data: result.rows,
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         message: "Vehicle retrieved successfully",
//         data: result.rows,
//       });
//     }
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
// const updateVehicle = async (req: Request, res: Response) => {
//   try {
//     const result = await vehicleServices.updateVehicle(
//       req.body,
//       req.params.vehicleId as string
//     );
//     if (result.rowCount === 0) {
//       res.status(404).json({
//         success: true,
//         message: "No vehicle found",
//         data: result.rows,
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         message: "Vehicle updated successfully",
//         data: result.rows,
//       });
//     }
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
// const deleteVehicle = async (req: Request, res: Response) => {
//   try {
//     const result = await vehicleServices.deleteVehicle(
//       req.params.vehicleId as string
//     );
//     if (result.rowCount === 0) {
//       res.status(404).json({
//         success: true,
//         message: "No vehicle found",
//         data: result.rows,
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         message: "Vehicle Delete successfully",
//         data: result.rows,
//       });
//     }
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

export const bookingControllers = {
  createController,
  getService,
};
