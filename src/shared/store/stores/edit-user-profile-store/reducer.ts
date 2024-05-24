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
  subjectId: "",
  email: "",
  name: "",
  surname: "",
}

const reducer = createReducer<typeof DEFAULT_EDIT_PROFILE_STORE, ActionType<typeof actions>>(DEFAULT_EDIT_PROFILE_STORE)
  .handleAction(actions.getEditProfileData.success, (state, action) => produce(state, (nextState) => {
    const stateName = action.payload.name as keyof EditProfileState
    console.log(action.payload)
    nextState[stateName] = action.payload.value
  }))
  .handleAction(actions.mountEditProfileData.success, (state, action) => produce(state, (nextState) => {
    const payload = action.payload;
    nextState.email = payload?.email;
    nextState.password = payload?.password;
    nextState.name = payload?.name;
    nextState.surname = payload?.surname;
    nextState.groupId = payload?.groupId || "";
    nextState.subjectId = payload?.subjectId || "";
  }))
  .handleAction(actions.clearEditProfileData.success, (state, action) => produce(state, (nextState) => {
    const { name } = action.payload

    if (name === "role") {
      nextState.userId = "";
    }
    nextState.email = "";
    nextState.password = "";
    nextState.name = "";
    nextState.surname = "";
    nextState.groupId = "";
    nextState.subjectId = "";

  }))


export default reducer;