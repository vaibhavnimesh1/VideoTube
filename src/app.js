import express from "express"
import userRouter from "./routes/user.routes.js"
const app = express()
// app.use
app.use("/api/v1/users" , userRouter )

export {app}