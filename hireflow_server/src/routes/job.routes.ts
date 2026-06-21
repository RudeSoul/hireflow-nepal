import { Router } from "express";
import { createJob, getJobs } from "../controllers/job.controller.js";

const router = Router();

// GET all jobs
router.get("/", getJobs);

// CREATE job
router.post("/", createJob);

export default router;
