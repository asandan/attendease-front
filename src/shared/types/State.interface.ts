import { AuthData as AuthState } from "./Auth.interface";
import { MedicalCertificationState, MedicalCertificationAdminState } from "./MedicalCertification.interface";
import { PaginationState } from "./Pagination.interface";
import { WeekState } from "./Week.interface";

export interface AppState {
  auth: AuthState,
  week: WeekState,
  medicalCertification: MedicalCertificationState,
  medicalCertificationAdmin: MedicalCertificationAdminState,
  pagination: PaginationState
}

export type AppSubStates =
  | keyof AppState["auth"]
  | keyof AppState["medicalCertification"]
  | keyof AppState["medicalCertificationAdmin"]
  | keyof AppState["week"]
  | keyof AppState["pagination"];