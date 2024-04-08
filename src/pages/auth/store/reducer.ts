import { ActionType, createReducer } from "typesafe-actions"
import * as actions from "./actions"
import { produce } from "immer"
import { AuthData } from "@/types/Auth.interface"



export const DEFAULT_AUTH_STATE: AuthData = {
  email: "",
  password: "",
}

const reducer = createReducer<typeof DEFAULT_AUTH_STATE, ActionType<typeof actions>>(DEFAULT_AUTH_STATE)
  .handleAction(actions.getAuthData.success, (state, action) => produce(state, (nextState) => {
    const authType = action.payload.name as keyof AuthData
    nextState[authType] = action.payload.value
  }))

export default reducer;