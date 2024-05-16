import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { MedicalCertificationState } from "@/shared/types";

export const DEFAULT_MEDICAL_CERTIFICATIONS_STATE: MedicalCertificationState = {
  startDate: undefined,
  endDate: undefined,
  subjectId: "",
  file: "",
  description: "",
}

const reducer = createReducer<typeof DEFAULT_MEDICAL_CERTIFICATIONS_STATE, ActionType<typeof actions>>(DEFAULT_MEDICAL_CERTIFICATIONS_STATE)
  .handleAction(actions.getMedicalCertification.success, (state, action) => produce(state, (nextState) => {
    const stateName = action.payload.name as keyof MedicalCertificationState
    nextState[stateName] = action.payload.value
  }))
  .handleAction(actions.clearMedicalCertificationState.success, (state, _) => produce(state, (nextState) => {
    nextState.startDate = DEFAULT_MEDICAL_CERTIFICATIONS_STATE.startDate;
    nextState.endDate = DEFAULT_MEDICAL_CERTIFICATIONS_STATE.endDate;
    nextState.subjectId = DEFAULT_MEDICAL_CERTIFICATIONS_STATE.subjectId;
    nextState.file = DEFAULT_MEDICAL_CERTIFICATIONS_STATE.file;
    nextState.description = DEFAULT_MEDICAL_CERTIFICATIONS_STATE.description;
  }))

export default reducer;