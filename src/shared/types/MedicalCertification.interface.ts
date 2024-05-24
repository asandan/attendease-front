import { ACCESS_TYPES, CERTIFICATE_STATUSES } from "../util";

export interface MedicalCertificationState {
  startDate: Date | undefined;
  endDate: Date | undefined;
  subjectId: string;
  file: string;
  description: string;
}

export interface MedicalCertificationAdminState {
  groupId: string;
  studentId: string;
  statuses: {
    id: number;
    status: CERTIFICATE_STATUSES;
  }[];
}
export interface RefillPayload { name: "statuses", value: RefillPayloadValue[] }
export interface RefillPayloadValue { id: number, status: CERTIFICATE_STATUSES }

export interface MedicalCertificationResponse {
  id: number;
  path: string;
  status: CERTIFICATE_STATUSES;
  originalName: string;
  description: string;
  studentId: number;
  picture: string;
  extension: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}[]

export interface MedicalCertificationRequest {
  id: number;
  status: CERTIFICATE_STATUSES
}

export interface GetProfileRequest {
  id: number;
  role: ACCESS_TYPES;
}

export interface UpdateProfileRequest {
  id: number;
  role: ACCESS_TYPES;
  email?: string;
  password?: string;
  groupId?: number;
  subjectId?: number;
}