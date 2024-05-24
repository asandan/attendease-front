import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { MarkStudentState, ProfileState } from "@/shared/types";
import { EditProfileState } from "@/shared/types/EditProfile.interface";

export const DEFAULT_MARK_STUDENT_STORE: MarkStudentState = {
  groupId: "",
  studentId: "",
}

const reducer = createReducer<typeof DEFAULT_MARK_STUDENT_STORE, ActionType<typeof actions>>(DEFAULT_MARK_STUDENT_STORE)
  .handleAction(actions.getMarkStudentData.success, (state, action) => produce(state, (nextState) => {
    const stateName = action.payload.name as keyof MarkStudentState
    nextState[stateName] = action.payload.value
  }))
  


export default reducer;