export interface IdParams {
  id: string;
}

export interface PaginationQuery {
  page?: string;
  limit?: string;
}

export type SuccessResponse<Type> = {
  success: true;
  data: Type;
};

export type ErrorResponse = {
  success: false;
  error: string;
};

export type ApiResponse<Type> = SuccessResponse<Type> | ErrorResponse;
