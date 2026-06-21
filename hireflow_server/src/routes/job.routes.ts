import { Router } from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/job.controller.js";

const router = Router();

// GET all jobs
router.get("/", getJobs);

// CREATE job
router.post("/", createJob);

// GET job by id
router.get("/:id", getJobById);

// UPDATE job by id
router.patch("/:id", updateJob);

// DELETE job by id
router.delete("/:id", deleteJob);

export default router;
