import { AppState } from "@/shared/types/State.interface";
import { createSelector } from "reselect";

const selectProfileState = (state: AppState) => state.profile;
export const getProfile = () => createSelector(selectProfileState, (state) => state)
