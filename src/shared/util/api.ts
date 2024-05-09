// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ATTENDANCE: {
    GET_ROWS: (userId: number, currentWeek: number) => `${process.env.NEXT_PUBLIC_API_URL}/attendance-snapshot/get-attendance-rows/${userId}/${currentWeek}`,
    MARK_MYSELF: () => `${process.env.NEXT_PUBLIC_API_URL}/attendance-snapshot`
  },
  SUBJECT: {
    GET_SUBJECTS: (skip: number, take: number) => `${process.env.NEXT_PUBLIC_API_URL}/subject?skip=${skip}&take=${take}`
  }
}