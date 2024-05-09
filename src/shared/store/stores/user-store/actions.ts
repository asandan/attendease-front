import { createAsyncAction } from "typesafe-actions"
import { ResponseError } from "@/shared/types";
import { USER_ACTIONS } from "./constants";

export const getUser = createAsyncAction(
  USER_ACTIONS.USER,
  USER_ACTIONS.USER_SUCCESS,
  USER_ACTIONS.USER_FAILURE
)<any, any, ResponseError>()  
