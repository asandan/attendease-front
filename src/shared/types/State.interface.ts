import { AuthData as AuthState } from "./Auth.interface";
import { WeekState } from "./Week.interface";

export interface AppState {
  auth: AuthState,
  week: WeekState,
}