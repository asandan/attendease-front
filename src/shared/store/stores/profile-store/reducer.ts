import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { ProfileState } from "@/shared/types";

export const DEFAULT_PROFILE_STORE: ProfileState = {
  name: "",
  surname: "",
  email: "",
  oldPassword: "",
  newPassword: "",
  faculty: "",
  facultyId: "",
  epId: "",
  ep: "",
  groupId: "",
  group: "",
  subjectId: "",
  subject: "",
}

const reducer = createReducer<typeof DEFAULT_PROFILE_STORE, ActionType<typeof actions>>(DEFAULT_PROFILE_STORE)
  .handleAction(actions.mountProfile.success, (state, action) => produce(state, (nextState) => {
    const payload = action.payload.data;
    nextState.name = payload?.account?.name;
    nextState.surname = payload?.account?.surname;
    nextState.email = payload?.account?.email;
    nextState.faculty = payload.group?.ep?.faculty.name || "";
    nextState.facultyId = payload.group?.ep?.faculty.id || "";
    nextState.ep = payload.group?.ep?.name || "";
    nextState.epId = payload.group?.ep?.id || "";
    nextState.group = payload.group?.name || "";
    nextState.groupId = payload.group?.id || "";
    nextState.subject = payload.subject?.name || "";
    nextState.subjectId = payload.subject?.id || "";
  }))
  .handleAction(actions.editProfile.success, (state, action) => produce(state, (nextState) => {
    const stateName = action.payload.name as keyof ProfileState
    console.log("STATE", stateName, );
    nextState[stateName] = action.payload.value
  }))


export default reducer;