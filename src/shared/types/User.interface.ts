import { ACCESS_TYPES } from "../util";

export interface UserState {
  id: string;
  name?: string;
  email: string;
  role: ACCESS_TYPES | "";
  surname?: string;
}