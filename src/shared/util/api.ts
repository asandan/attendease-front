// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ATTENDANCE: {
    GET_ROWS: (userId: number, currentWeek: number) => `${process.env.NEXT_PUBLIC_API_URL}/attendance-snapshot/get-attendance-rows/${userId}/${currentWeek}`,
    MARK_MYSELF: () => `${process.env.NEXT_PUBLIC_API_URL}/attendance-snapshot`
  },
  SUBJECT: {
    GET_SUBJECTS: (skip: number, take: number) => `${process.env.NEXT_PUBLIC_API_URL}/subject?skip=${skip}&take=${take}`
  },
  GROUP: {
    GET_GROUPS: (skip: number, take: number) => `${process.env.NEXT_PUBLIC_API_URL}/group?skip=${skip}&take=${take}`
  },
  STUDENT: {
    GET_STUDENTS: (groupId: number, skip: number, take: number) => `${process.env.NEXT_PUBLIC_API_URL}/student?skip=${skip}&take=${take}&groupId=${groupId}`
  },
  MEDICAL_CERTIFICATION: {
    GET_CERTIFICATIONS: (studentId: number) => `${process.env.NEXT_PUBLIC_API_URL}/medical-certification/${studentId}`,
    RESOLVE_CERTIFICATIONS: () => `${process.env.NEXT_PUBLIC_API_URL}/medical-certification`
  }
}