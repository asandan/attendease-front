import { ACCESS_TYPES } from "./constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ATTENDANCE: {
    GET_ROWS: (userId: number, currentWeek: number) => `${process.env.NEXT_PUBLIC_API_URL}/attendance-snapshot/get-attendance-rows/${userId}/${currentWeek}`,
    MARK_MYSELF: () => `${process.env.NEXT_PUBLIC_API_URL}/attendance-snapshot`
  },
  SUBJECT: {
    GET_SUBJECTS: (skip: number, take: number, groupId?: number) => `${process.env.NEXT_PUBLIC_API_URL}/subject?skip=${skip}&take=${take}`
  },
  GROUP: {
    GET_GROUPS: (skip: number, take: number, teacherId?: number) => {
      return teacherId ?
        `${process.env.NEXT_PUBLIC_API_URL}/group?skip=${skip}&take=${take}&teacherId=${1}`
        :
        `${process.env.NEXT_PUBLIC_API_URL}/group?skip=${skip}&take=${take}`
    }
  },
  STUDENT: {
    GET_STUDENTS: (groupId: number, skip: number, take: number) => `${process.env.NEXT_PUBLIC_API_URL}/student?skip=${skip}&take=${take}&groupId=${groupId}`
  },
  MEDICAL_CERTIFICATION: {
    GET_CERTIFICATIONS: (studentId: number) => `${process.env.NEXT_PUBLIC_API_URL}/medical-certification/${studentId}`,
    RESOLVE_CERTIFICATIONS: () => `${process.env.NEXT_PUBLIC_API_URL}/medical-certification`
  },
  PROFILE: {
    GET_PROFILE: (userId: number, role: ACCESS_TYPES) => `${process.env.NEXT_PUBLIC_API_URL}/user/get-profile/${userId}/${role}`,
    UPDATE_PROFILE: () => `${process.env.NEXT_PUBLIC_API_URL}/user/update-profile`
  },
  USER: {
    GET_USERS_BY_ROLE: (role: ACCESS_TYPES) => `${process.env.NEXT_PUBLIC_API_URL}/user/get-users/${role}`
  }
}