import express from "express";
import {
  isAuthenticate,
  login,
  logOut,
  register,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
  verifyEmail,
} from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logOut);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-account", userAuth, verifyEmail);
authRouter.get("/is-authenticate", userAuth, isAuthenticate);
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password", resetPassword);

authRouter.post(
  "/add-customer",
  (req, res, next) => {
    if (req.body.customer_name) {
      next();
    } else {
      return res.json({
        message: "give me the customer name",
      });
    }
  },
  (req, res, next) => {
    if (req.body.customer_name === "forhad") {
      next();
    } else {
      return res.json({
        message: "give me the correct customer name",
      });
    }
  },
  (req, res) => {
    res.json({
      body: req.body,
    });
  }
);

export default authRouter;
