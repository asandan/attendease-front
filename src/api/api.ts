import { ACCESS_TYPES, API, GetAttendanceRowsRequest, GetProfileRequest, MedicalCertificationRequest, METHODS, UpdateProfileRequest } from "@/shared";
import request from "@/shared/util/request";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAttendanceRows: (payload: GetAttendanceRowsRequest) => request(METHODS.GET, API.ATTENDANCE.GET_ROWS(payload.userId, payload.currentWeek)),
  markMyself: (userId: number) => request(METHODS.POST, API.ATTENDANCE.MARK_MYSELF(), { userId }),
  getSubjects: (skip = 0, take = 1000, groupId?: number) => request(METHODS.GET, API.SUBJECT.GET_SUBJECTS(skip, take, groupId)),
  getGroups: (skip = 0, take = 1000, teacherId?: number) => request(METHODS.GET, API.GROUP.GET_GROUPS(skip, take, teacherId)),
  getStudents: (groupId: number, skip = 0, take = 1000) => request(METHODS.GET, API.STUDENT.GET_STUDENTS(groupId, skip, take)),
  getMedicalCertifications: (studentId: number) => request(METHODS.GET, API.MEDICAL_CERTIFICATION.GET_CERTIFICATIONS(studentId)),
  resolveMedicalCertifications: (payload: MedicalCertificationRequest[]) => request(METHODS.PUT, API.MEDICAL_CERTIFICATION.RESOLVE_CERTIFICATIONS(), payload)(),
  getProfile: (payload: GetProfileRequest) => request(METHODS.GET, API.PROFILE.GET_PROFILE(payload.id, payload.role)),
  updateProfile: (payload: UpdateProfileRequest) => request(METHODS.PUT, API.PROFILE.UPDATE_PROFILE(), payload)(),
  getUsers: (role: ACCESS_TYPES) => request(METHODS.GET, API.USER.GET_USERS_BY_ROLE(role))
}