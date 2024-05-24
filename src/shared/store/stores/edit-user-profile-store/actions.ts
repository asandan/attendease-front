import { createAsyncAction } from "typesafe-actions"
import { ResponseError } from "@/shared/types";
import { CLEAR_EDIT_PROFILE_ACTIONS, EDIT_PROFILE_ACTIONS, MOUNT_EDIT_PROFILE_ACTIONS } from "./constants";

export const getEditProfileData = createAsyncAction(
  EDIT_PROFILE_ACTIONS.EDIT_PROFILE,
  EDIT_PROFILE_ACTIONS.EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ACTIONS.EDIT_PROFILE_FAILURE
)<any, any, ResponseError>();

export const mountEditProfileData = createAsyncAction(
  MOUNT_EDIT_PROFILE_ACTIONS.MOUNT_EDIT_PROFILE,
  MOUNT_EDIT_PROFILE_ACTIONS.MOUNT_EDIT_PROFILE_SUCCESS,
  MOUNT_EDIT_PROFILE_ACTIONS.MOUNT_EDIT_PROFILE_FAILURE
)<any, any, ResponseError>();

export const clearEditProfileData = createAsyncAction(
  CLEAR_EDIT_PROFILE_ACTIONS.CLEAR_EDIT_PROFILE,
  CLEAR_EDIT_PROFILE_ACTIONS.CLEAR_EDIT_PROFILE_SUCCESS,
  CLEAR_EDIT_PROFILE_ACTIONS.CLEAR_EDIT_PROFILE_FAILURE
)<any, any, ResponseError>();
