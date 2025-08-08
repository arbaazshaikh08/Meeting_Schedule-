import { Router } from "express";
import { verifyJWT } from "../middlewere.js/auth.middlewere.js";
import { loginUser, logoutUser, refreshAccessToken, SignupUser } from "../controller/user.controller.js";

const router = Router()

router.route("/signup").post( SignupUser)
router.route("/login").post(loginUser)
router.route("/refresh-token ").get( refreshAccessToken)
router.route("/logout").post(verifyJWT, logoutUser)

export default router