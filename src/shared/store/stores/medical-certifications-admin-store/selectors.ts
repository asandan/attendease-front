import { AppState } from "@/shared/types/State.interface";
import { createSelector } from "reselect";

const selectMedicalCertificationAdminState = (state: AppState) => state.medicalCertificationAdmin;
export const getMedicalCertificationAdmin = () => createSelector(selectMedicalCertificationAdminState, (state) => state)
