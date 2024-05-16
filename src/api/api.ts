import { API, GetAttendanceRowsRequest, MedicalCertificationRequest, METHODS } from "@/shared";
import request from "@/shared/util/request";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAttendanceRows: (payload: GetAttendanceRowsRequest) => request(METHODS.GET, API.ATTENDANCE.GET_ROWS(payload.userId, payload.currentWeek)),
  markMyself: (userId: number) => request(METHODS.POST, API.ATTENDANCE.MARK_MYSELF(), { userId }),
  getSubjects: (skip = 0, take = 1000) => request(METHODS.GET, API.SUBJECT.GET_SUBJECTS(skip, take)),
  getGroups: (skip = 0, take = 1000) => request(METHODS.GET, API.GROUP.GET_GROUPS(skip, take)),
  getStudents: (groupId: number, skip = 0, take = 1000) => request(METHODS.GET, API.STUDENT.GET_STUDENTS(groupId, skip, take)),
  getMedicalCertifications: (studentId: number) => request(METHODS.GET, API.MEDICAL_CERTIFICATION.GET_CERTIFICATIONS(studentId)),
  resolveMedicalCertifications: (payload: MedicalCertificationRequest[]) => request(METHODS.PUT, API.MEDICAL_CERTIFICATION.RESOLVE_CERTIFICATIONS(), payload)(),
}