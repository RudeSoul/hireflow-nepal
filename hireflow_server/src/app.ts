import express from "express";
import cors from "cors";

import jobRoutes from "./routes/job.routes.js";

import { errorHandler } from "./middleware/error.middleware.js";

import { authMiddleware } from "./middleware/auth.middleware.js";

import { login } from "./controllers/job.controller.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "HireFlow API running",
  });
});

app.use("/api/jobs", jobRoutes);

// test route to check auth middleware
app.get("/me", authMiddleware, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

app.post("/login", login);

app.use(errorHandler);

export default app;
