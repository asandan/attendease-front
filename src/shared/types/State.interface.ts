import { AuthData as AuthState } from "./Auth.interface";
import { MedicalCertificationState } from "./MedicalCertification.interface";
import { UserState } from "./User.interface";
import { WeekState } from "./Week.interface";

export interface AppState {
  auth: AuthState,
  week: WeekState,
  user: UserState,
  medicalCertification: MedicalCertificationState,
}