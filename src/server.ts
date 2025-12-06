import express, { Request, Response } from "express";
import config from "./config";
import initDB from "./config/db";
import { singupRoutes } from "./auth/signup/signup.route";
import { signinRoutes } from "./auth/signin/signin.route";
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
