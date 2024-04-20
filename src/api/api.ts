import { API, METHODS } from "@/shared";
import request from "@/shared/util/request";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAttendanceRows: (payload: { userId: number, currentWeek: number }) => request(METHODS.GET, API.ATTENDANCE.GET_ROWS(payload.userId, payload.currentWeek))()
}