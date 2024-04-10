import { DAYS_DEFAULT_COLUMN, generateColumns, getColumnDefs } from "@/components/InfiniteDateTable/util";
import { WeekState } from "@/shared/types";
import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { TODAY } from "@/shared/util";



export const DEFAULT_WEEK_STATE: WeekState = {
  columns: generateColumns(TODAY, DAYS_DEFAULT_COLUMN, getColumnDefs),
  currentDate: TODAY,
  rows: [],
}

const reducer = createReducer<typeof DEFAULT_WEEK_STATE, ActionType<typeof actions>>(DEFAULT_WEEK_STATE)
  .handleAction(actions.getWeek.success, (state, action) => produce(state, (nextState) => {
    const { payload } = action
    nextState.columns = payload.columns
    nextState.currentDate = payload.currentDate
  }))

export default reducer;