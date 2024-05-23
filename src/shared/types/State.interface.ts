import { AuthData as AuthState } from "./Auth.interface";
import { EditProfileState } from "./EditProfile.interface";
import { MedicalCertificationState, MedicalCertificationAdminState } from "./MedicalCertification.interface";
import { PaginationState } from "./Pagination.interface";
import { ProfileState } from "./Profile.interface";
import { WeekState } from "./Week.interface";

export interface AppState {
  auth: AuthState,
  week: WeekState,
  medicalCertification: MedicalCertificationState,
  medicalCertificationAdmin: MedicalCertificationAdminState,
  pagination: PaginationState,
  profile: ProfileState,
  editProfile: EditProfileState,
}

export type AppSubStates =
  | keyof AppState["auth"]
  | keyof AppState["medicalCertification"]
  | keyof AppState["medicalCertificationAdmin"]
  | keyof AppState["week"]
  | keyof AppState["pagination"]
  | keyof AppState["profile"];