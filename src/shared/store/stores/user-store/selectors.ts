import { AppState } from "@/shared/types/State.interface";
import { createSelector } from "reselect";

const selectUserState = (state: AppState) => state.user;
export const getUser = () => createSelector(selectUserState, (state) => state)
