import { Request, Response } from "express";
import { supabase } from "../db/supabase.js";

// GET all jobs
export const getJobs = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json(data);
};

// CREATE job
export const createJob = async (req: Request, res: Response) => {
  const { title, description, company_id } = req.body;

  const { data, error } = await supabase
    .from("jobs")
    .insert([
      {
        title,
        description,
        company_id,
        status: "draft",
      },
    ])
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json(data);
};
