import { Request, Response } from "express";
import { vehicleServices } from "./vehicle.service";
import sendResponse from "../../sendResponse";

const createVehicle = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.createVehicle(req.body);
    res.status(201).json({
      success: true,
      message: "Vehicle created successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const getVehicle = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.getVehicle();
    if (result.rowCount === 0) {
      sendResponse(res, 200, true, "No vehicles found", result.rows);
    } else {
      sendResponse(
        res,
        200,
        true,
        "Vehicles retrieved successfully",
        result.rows
      );
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const singleVehicle = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.singleVehicle(
      req.params.vehicleId as string
    );
    if (result.rowCount === 0) {
      sendResponse(res, 200, true, "No vehicle found", result.rows);
    } else {
      sendResponse(
        res,
        200,
        true,
        "Vehicle retrieved successfully",
        result.rows
      );
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const updateVehicle = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.updateVehicle(
      req.body,
      req.params.vehicleId as string
    );
    if (result.rowCount === 0) {
      res.status(404).json({
        success: true,
        message: "No vehicle found",
        data: result.rows,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Vehicle updated successfully",
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
const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.deleteVehicle(
      req.params.vehicleId as string
    );
    if (result.rowCount === 0) {
      res.status(404).json({
        success: true,
        message: "No vehicle found",
        data: result.rows,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Vehicle Delete successfully",
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

export const vehicleControllers = {
  createVehicle,
  getVehicle,
  singleVehicle,
  updateVehicle,
  deleteVehicle,
};
