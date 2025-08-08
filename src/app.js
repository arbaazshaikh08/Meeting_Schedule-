import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb"}))
app.use(cookieParser())

 import userRouter from "./routes/user.router.js"
 import meetingRouter from "./routes/meeting.route.js"

 app.use("/api/v1/user",userRouter)
 app.use("/api/v1/meeting",meetingRouter)
 

export { app}