export interface Company {
  id: string;
  name: string;
  slug: string;
  logoUrl: string | null;
  createdAt: string;
}
export interface CompanyParams {
  id: string;
}

export interface UpdateCompanyDto {
  name?: string;
  slug?: string;
  logoUrl?: string | null;
}
