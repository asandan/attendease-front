import { createAsyncAction } from "typesafe-actions"
import { ROWS_ACTIONS, WEEK_ACTIONS } from "./constants"
import { ResponseError, WeekState } from "@/shared/types";

export type WeekSuccess = Omit<WeekState, "rows">

export const getWeek = createAsyncAction(
  WEEK_ACTIONS.GET_WEEK,
  WEEK_ACTIONS.GET_WEEK_SUCCESS,
  WEEK_ACTIONS.GET_WEEK_FAILURE
)<any, any, ResponseError>()  

export const getRows = createAsyncAction(
  ROWS_ACTIONS.GET_ROWS,
  ROWS_ACTIONS.GET_ROWS_SUCCESS,
  ROWS_ACTIONS.GET_ROWS_FAILURE
)<any, any, ResponseError>()  