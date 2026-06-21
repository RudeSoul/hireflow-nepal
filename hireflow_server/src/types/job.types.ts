export interface Job {
  id: string;
  companyId: string;
  title: string;
  department?: string;
  location?: string;
  employmentType?: string;
  description: string;
  status: string;
  createdBy: string;
  createdAt: string;
}
