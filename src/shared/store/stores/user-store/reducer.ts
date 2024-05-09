import { UserState } from "@/shared/types";
import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";

export const DEFAULT_USER_STATE: UserState = {
  id: "",
  email: "",
  name: "",
  roleId: "",
  surname: "",
}

const reducer = createReducer<typeof DEFAULT_USER_STATE, ActionType<typeof actions>>(DEFAULT_USER_STATE)
  .handleAction(actions.getUser.success, (state, action) => produce(state, (nextState) => {
    Object.keys(action.payload).forEach((key) => {
      nextState[key as keyof UserState] = action.payload[key]
    })
  }))

export default reducer; 