import { ACCESS_TYPES } from "../util"

export type EditProfileState = {
  role: ACCESS_TYPES | "";
  userId: number | "";
  password: string | "";
  groupId?: number | "";
  subjectId?: number | "";
}