import { AppState } from "@/shared/types/State.interface";
import { createSelector } from "reselect";

const selectAuthState = (state: AppState) => state.week;
export const getWeek = () => createSelector(selectAuthState, (state) => state)
