// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ATTENDANCE: {
    GET_ROWS: (userId: number, currentWeek: number) => `${process.env.NEXT_PUBLIC_API_URL}/attendance-snapshot/get-attendance-rows/${userId}/${currentWeek}`
  }
}