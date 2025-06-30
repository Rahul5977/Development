import express from "express";
import healthCheckRouter from "./routes/healthcheck.routes.js";
import {userRoutes} from "./routes/auth.routes.js"

const app = express();

app.use("/api/v1/healthCheck",healthCheckRouter)
app.use("/api/v1/auth",userRoutes)


export default app;
