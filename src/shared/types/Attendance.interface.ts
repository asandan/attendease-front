import { WEEK_DAYS } from "../util"

export interface GetAttendanceRowsRequest {
  userId: number,
  currentWeek: number
}

export type GetAttendanceRowsResponse = {
  [key in keyof typeof WEEK_DAYS | "subject" ]: number | string;
}