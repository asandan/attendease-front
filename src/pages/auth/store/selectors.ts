import { AppState } from "@/types/State.interface";
import { createSelector } from "reselect";

const selectAuthState = (state: AppState) => state.auth;
export const getAuth = () => createSelector(selectAuthState, (state) => state)
