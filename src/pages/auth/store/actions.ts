import { createAsyncAction } from "typesafe-actions"
import { AUTH_ACTIONS } from "./constants"
import { DEFAULT_AUTH_STATE } from "./reducer"
import { ResponseError } from "@/types";

export type AuthSuccess = {
  name: string,
  value: string;
}

export const getAuthData = createAsyncAction(
  AUTH_ACTIONS.GET_AUTH,
  AUTH_ACTIONS.GET_AUTH_SUCCESS,
  AUTH_ACTIONS.GET_AUTH_FAILURE
)<typeof DEFAULT_AUTH_STATE, AuthSuccess, ResponseError>()