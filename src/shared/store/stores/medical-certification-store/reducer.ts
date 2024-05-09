import { DAYS_DEFAULT_COLUMN, generateColumns, getColumnDefs } from "@/components/InfiniteDateTable/util";
import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { getWeeksPassed, SECOND_SEMESTER_START_DATE } from "@/shared/util";
import { MedicalCertificationState } from "@/shared/types";

export const DEFAULT_MEDICAL_CERTIFICATIONS_STATE: MedicalCertificationState = {
  date: undefined,
  subjectId: "",
  file: "",
  description: "",
}

const reducer = createReducer<typeof DEFAULT_MEDICAL_CERTIFICATIONS_STATE, ActionType<typeof actions>>(DEFAULT_MEDICAL_CERTIFICATIONS_STATE)
  .handleAction(actions.getMedicalCertification.success, (state, action) => produce(state, (nextState) => {
    const authType = action.payload.name as keyof MedicalCertificationState
    nextState[authType] = action.payload.value
  }))

export default reducer;