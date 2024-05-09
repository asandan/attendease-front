import { AppState } from "@/shared/types/State.interface";
import { createSelector } from "reselect";

const selectMedicalCertificationState = (state: AppState) => state.medicalCertification;
export const getMedicalCertification = () => createSelector(selectMedicalCertificationState, (state) => state)
