import express, { Request, Response } from "express";
import config from "./config";
import initDB from "./config/db";
import { singupRoutes } from "./modules/auth/signup/signup.route";
import { signinRoutes } from "./modules/auth/signin/signin.route";
import { vehicleRoutes } from "./modules/vehicle/vehicle.route";
import { userRoutes } from "./modules/user/user.route";
import { bookingRoutes } from "./modules/bookings/booking.route";
const app = express();
const port = config.port;
//body parser
app.use(express.json());

//initializing db
initDB();
//singup
app.use("/api/v1/auth/signup", singupRoutes);
//signin
app.use("/api/v1/auth/signin", signinRoutes);
//vehicle
app.use("/api/v1/vehicles", vehicleRoutes);
//user
app.use("/api/v1/users", userRoutes);
//bookings
app.use("/api/v1/bookings", bookingRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
