import { ACCESS_TYPES } from "../util";
import { AdminProfileResponse, StudentProfileResponse, TeacherProfileResponse } from "./Profile.interface";

export type GetUserDataType<T> = T extends ACCESS_TYPES.STUDENT
  ? StudentProfileResponse
  : T extends ACCESS_TYPES.TEACHER
  ? TeacherProfileResponse
  : AdminProfileResponse