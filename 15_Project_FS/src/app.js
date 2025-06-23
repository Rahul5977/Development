import express from "express";

const app = express();

import healthCheckRouter from "./routes/healthcheck.routes.js";
app.use("/api/v1/healthCheck",healthCheckRouter)

export default app;
