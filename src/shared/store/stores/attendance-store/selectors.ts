import { AppState } from "@/shared/types/State.interface";
import { createSelector } from "reselect";

const selectWeekState = (state: AppState) => state.week;
export const getWeek = () => createSelector(selectWeekState, (state) => state)
