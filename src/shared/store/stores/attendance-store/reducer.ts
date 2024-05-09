import { DAYS_DEFAULT_COLUMN, generateColumns, getColumnDefs } from "@/components/InfiniteDateTable/util";
import { WeekState } from "@/shared/types";
import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { getWeeksPassed, SECOND_SEMESTER_START_DATE } from "@/shared/util";

export const DEFAULT_WEEK_STATE: WeekState = {
  currentWeek: getWeeksPassed(SECOND_SEMESTER_START_DATE),
  rows: [],
}

const reducer = createReducer<typeof DEFAULT_WEEK_STATE, ActionType<typeof actions>>(DEFAULT_WEEK_STATE)
  .handleAction(actions.getWeek.success, (state, action) => produce(state, (nextState) => {
    const { payload } = action
    nextState.currentWeek = payload?.currentWeek
  }))
  .handleAction(actions.getRows.success, (state, action) => produce(state, (nextState) => {
    const { payload } = action
    nextState.rows = payload
  }))


export default reducer;