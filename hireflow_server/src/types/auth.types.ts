export type UserRole = "admin" | "recruiter" | "viewer";

export interface AuthUser {
  id: string;
  company_id: string;
  role: UserRole;
  email?: string;
}
