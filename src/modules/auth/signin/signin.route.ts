import { Router } from "express";
import { signinControllers } from "./signin.controller";

const router = Router();
router.post("/", signinControllers.loginUser);

export const signinRoutes = router;
