import { Router } from "express";
import { bookingControllers } from "./booking.controller";
import auth from "../../middleware/auth";

const router = Router();
router.post("/", auth(), bookingControllers.createController);
export const bookingRoutes = router;
