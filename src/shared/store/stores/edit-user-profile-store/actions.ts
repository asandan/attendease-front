import { createAsyncAction } from "typesafe-actions"
import { ResponseError } from "@/shared/types";
import { EDIT_PROFILE_ACTIONS } from "./constants";

export const getEditProfileData = createAsyncAction(
  EDIT_PROFILE_ACTIONS.EDIT_PROFILE,
  EDIT_PROFILE_ACTIONS.EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ACTIONS.EDIT_PROFILE_FAILURE
)<any, any, ResponseError>();
