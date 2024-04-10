import { createAsyncAction } from "typesafe-actions"
import { WEEK_ACTIONS } from "./constants"
import { DEFAULT_WEEK_STATE } from "./reducer"
import { ResponseError, WeekState } from "@/shared/types";

export type WeekSuccess = Omit<WeekState, "rows">

export const getWeek = createAsyncAction(
  WEEK_ACTIONS.GET_WEEK,
  WEEK_ACTIONS.GET_WEEK_SUCCESS,
  WEEK_ACTIONS.GET_WEEK_FAILURE
)<typeof DEFAULT_WEEK_STATE, WeekSuccess, ResponseError>()  