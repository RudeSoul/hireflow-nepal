import express from "express";
import cors from "cors";

import jobRoutes from "./routes/job.routes.js";

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

export default app;
