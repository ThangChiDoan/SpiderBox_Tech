export interface IErrorResponse {
  message?: string;
  error: string;
  errors: { [key: string]: string[] };
}
