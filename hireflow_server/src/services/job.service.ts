import { supabase } from "../db/supabase.js";
import { CreateJobDto } from "../types/job.types.js";

export const getAllJobs = async (companyId: string) => {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("company_id", companyId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createJob = async (payload: CreateJobDto, companyId: string) => {
  const { data, error } = await supabase
    .from("jobs")
    .insert({
      ...payload,
      company_id: companyId,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getJobById = async (id: string, companyId: string) => {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .eq("company_id", companyId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateJob = async (
  id: string,
  payload: Partial<CreateJobDto>,
  companyId: string,
) => {
  const { data, error } = await supabase
    .from("jobs")
    .update(payload)
    .eq("id", id)
    .eq("company_id", companyId)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteJob = async (id: string, companyId: string) => {
  const { error } = await supabase
    .from("jobs")
    .delete()
    .eq("id", id)
    .eq("company_id", companyId);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
