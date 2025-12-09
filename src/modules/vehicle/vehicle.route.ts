import { Router } from "express";
import { vehicleControllers } from "./vehicle.controller";
import auth from "../../middleware/auth";

const router = Router();
router.post("/", auth(), vehicleControllers.createVehicle);
router.get("/", vehicleControllers.getVehicle);
router.get("/:vehicleId", vehicleControllers.singleVehicle);
router.put("/:vehicleId", auth(), vehicleControllers.updateVehicle);
router.delete("/:vehicleId", auth(), vehicleControllers.deleteVehicle);
export const vehicleRoutes = router;
