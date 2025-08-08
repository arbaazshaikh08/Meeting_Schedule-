import { asyncHandler } from "../utils/asyncHandlar.js"
import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/User.model.js"

export const verifyJWT = asyncHandler(async(requestAnimationFrame,res) => {
    const token = requestAnimationFrame.cookies?.accesessToken || req.header ("Authorization")?.replace("Bearer ","");
})