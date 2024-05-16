import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { MedicalCertificationAdminState } from "@/shared/types";

export const DEFAULT_MEDICAL_CERTIFICATION_ADMIN_STORE: MedicalCertificationAdminState = {
  groupId: "",
  studentId: "",
  statuses: [],
}

const reducer = createReducer<typeof DEFAULT_MEDICAL_CERTIFICATION_ADMIN_STORE, ActionType<typeof actions>>(DEFAULT_MEDICAL_CERTIFICATION_ADMIN_STORE)
  .handleAction(actions.getMedicalCertificationAdminData.success, (state, action) => produce(state, (nextState) => {
    const stateName = action.payload.name as keyof MedicalCertificationAdminState
    if (stateName === "statuses") {
      const stateIdx = nextState.statuses.findIndex((status) => status.id === action.payload.value.id);
      nextState.statuses[stateIdx].status = action.payload.value.status
    } else {
      nextState[stateName] = action.payload.value
    }
  }))
  .handleAction(actions.refillMedicalCertificationAdminData.success, (state, action) => produce(state, (nextState) => {
    const { payload } = action
    if (payload.name === "statuses") {
      nextState.statuses = payload.value
    }
  }))
  .handleAction(actions.clearMedicalCertificationAdminData.success, (state) => produce(state, (nextState) => {
    nextState.groupId = DEFAULT_MEDICAL_CERTIFICATION_ADMIN_STORE.groupId;
    nextState.studentId = DEFAULT_MEDICAL_CERTIFICATION_ADMIN_STORE.studentId;
    nextState.statuses = DEFAULT_MEDICAL_CERTIFICATION_ADMIN_STORE.statuses;
  }))

export default reducer;