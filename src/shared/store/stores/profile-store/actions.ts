import { createAsyncAction } from "typesafe-actions"
import { ResponseError } from "@/shared/types";
import { EDIT_PROFILE_ACTIONS, PROFILE_ACTIONS } from "./constants";

export const mountProfile = createAsyncAction(
  PROFILE_ACTIONS.PROFILE,
  PROFILE_ACTIONS.PROFILE_SUCCESS,
  PROFILE_ACTIONS.PROFILE_FAILURE
)<any, any, ResponseError>()

export const editProfile = createAsyncAction(
  EDIT_PROFILE_ACTIONS.EDIT_PROFILE,
  EDIT_PROFILE_ACTIONS.EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ACTIONS.EDIT_PROFILE_FAILURE
)<any, any, ResponseError>()