import { ACCESS_TYPES } from "../util"

export type EditProfileState = {
  role: ACCESS_TYPES | string;
  userId: number | string;
  password: string;
  email: string;
  groupId?: number | string;
  subjectId?: number | string;
  name: string;
  surname: string;
}

export interface UpdateEditProfileRequest {
  id: number;
  role: ACCESS_TYPES;
  email?: string;
  password?: string;
  name?:string;
  surname?:string;
  groupId?: number;
  subjectId?: number;
}