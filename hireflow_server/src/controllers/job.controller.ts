import { Request, Response } from "express";
import * as JobService from "../services/job.service.js";
import { Job, JobParams } from "../types/job.types.js";
import { ApiResponse } from "../types/api.types.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getJobs = asyncHandler(
  async (req: Request, res: Response<ApiResponse<Job[]>>) => {
    const jobs = await JobService.getAllJobs();

    res.json({
      success: true,
      data: jobs,
    });
  },
);

export const createJob = asyncHandler(
  async (req: Request, res: Response<ApiResponse<Job>>) => {
    const job = await JobService.createJob(req.body);

    res.status(201).json({
      success: true,
      data: job,
    });
  },
);

export const getJobById = asyncHandler(
  async (req: Request<JobParams>, res: Response<ApiResponse<Job>>) => {
    const job = await JobService.getJobById(req.params.id);

    res.json({
      success: true,
      data: job,
    });
  },
);

export const updateJob = asyncHandler(
  async (req: Request<JobParams>, res: Response<ApiResponse<Job>>) => {
    const job = await JobService.updateJob(req.params.id, req.body);

    res.json({
      success: true,
      data: job,
    });
  },
);

export const deleteJob = asyncHandler(
  async (req: Request<JobParams>, res: Response<ApiResponse<null>>) => {
    await JobService.deleteJob(req.params.id);

    res.json({
      success: true,
      data: null,
    });
  },
);
