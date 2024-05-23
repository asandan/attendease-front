import { WeekState } from "@/shared/types";
import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { getWeeksPassed } from "@/shared/util";

export const DEFAULT_WEEK_STATE: WeekState = {
  currentWeek: getWeeksPassed(new Date()),
  rows: [],
}

const reducer = createReducer<typeof DEFAULT_WEEK_STATE, ActionType<typeof actions>>(DEFAULT_WEEK_STATE)
  .handleAction(actions.getWeek.success, (state, action) => produce(state, (nextState) => {
    const { payload } = action
    nextState.currentWeek = payload?.currentWeek
    console.log(payload)
  }))
  .handleAction(actions.getRows.success, (state, action) => produce(state, (nextState) => {
    const { payload } = action
    nextState.rows = payload
  }))


export default reducer;