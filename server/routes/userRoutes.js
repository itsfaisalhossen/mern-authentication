import express from "express";
import userAuth from "../middleware/userAuth.js";
import { getUserData } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData);
// userRouter.get("/data", userAuth, (req, res) => {
//   console.log(req.body);
// });

export default userRouter;
