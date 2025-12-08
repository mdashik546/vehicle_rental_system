import { Router } from "express";
import auth from "../../middleware/auth";
import { userControllers } from "./user.controller";

const router = Router();
router.get("/", auth("admin"), userControllers.getUser);
router.get("/:userId", userControllers.singleUser);
router.put("/:userId", auth(), userControllers.updateUser);
router.delete("/:userId", auth(), userControllers.deleteUser);
export const userRoutes = router;
