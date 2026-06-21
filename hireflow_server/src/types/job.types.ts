export interface Job {
  id: string;
  company_id: string;

  title: string;
  department: string | null;
  location: string | null;
  employment_type: string | null;

  description: string | null;

  status: string;

  created_at: string;
}

export interface CreateJobDto {
  company_id: string;

  title: string;
  department?: string;
  location?: string;
  employment_type?: string;

  description?: string;
}

export interface JobParams {
  id: string;
}
