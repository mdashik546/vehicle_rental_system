import { Router } from "express";
import { signupControllers } from "./signup.controller";

const router = Router();

router.post("/", signupControllers.registerUser);

export const singupRoutes = router;
