import { Request, Response } from "express";
import * as JobService from "../services/job.service.js";
import { Job, JobParams } from "../types/job.types.js";
import { ApiResponse } from "../types/api.types.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { supabase } from "../db/supabase.js";

export const getJobs = asyncHandler(
  async (req: Request, res: Response<ApiResponse<Job[]>>) => {
    const jobs = await JobService.getAllJobs(req.user!.company_id);

    res.json({
      success: true,
      data: jobs,
    });
  },
);

export const createJob = asyncHandler(
  async (req: Request, res: Response<ApiResponse<Job>>) => {
    const job = await JobService.createJob(req.body, req.user!.company_id);

    res.status(201).json({
      success: true,
      data: job,
    });
  },
);

export const getJobById = asyncHandler(
  async (req: Request<JobParams>, res: Response<ApiResponse<Job>>) => {
    const job = await JobService.getJobById(
      req.params.id,
      req.user!.company_id,
    );

    res.json({
      success: true,
      data: job,
    });
  },
);

export const updateJob = asyncHandler(
  async (req: Request<JobParams>, res: Response<ApiResponse<Job>>) => {
    const job = await JobService.updateJob(
      req.params.id,
      req.body,
      req.user!.company_id,
    );

    res.json({
      success: true,
      data: job,
    });
  },
);

export const deleteJob = asyncHandler(
  async (req: Request<JobParams>, res: Response<ApiResponse<null>>) => {
    await JobService.deleteJob(req.params.id, req.user!.company_id);

    res.json({
      success: true,
      data: null,
    });
  },
);

// temp login point
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
    });
  }

  return res.json({
    success: true,
    data: {
      access_token: data.session.access_token,
    },
  });
});
