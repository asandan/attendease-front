import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { ProfileState } from "@/shared/types";
import { EditProfileState } from "@/shared/types/EditProfile.interface";

export const DEFAULT_EDIT_PROFILE_STORE: EditProfileState = {
  password: "",
  userId: "",
  role: "",
  groupId: "",
  subjectId: ""
}

const reducer = createReducer<typeof DEFAULT_EDIT_PROFILE_STORE, ActionType<typeof actions>>(DEFAULT_EDIT_PROFILE_STORE)
  
  .handleAction(actions.getEditProfileData.success, (state, action) => produce(state, (nextState) => {
    const stateName = action.payload.name as keyof EditProfileState
    console.log("STATE", stateName, );
    nextState[stateName] = action.payload.value
  }))


export default reducer;