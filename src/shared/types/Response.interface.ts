export interface ResponseError {
  code?: number;
  message?: string;
  customMessage?: boolean;
  meta?: Record<string, unknown>;
}