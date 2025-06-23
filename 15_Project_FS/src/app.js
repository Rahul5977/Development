import express from "express";
import healthCheckRouter from "./routes/healthcheck.routes.js";

const app = express();

app.use("/api/v1/healthCheck",healthCheckRouter)

export default app;
