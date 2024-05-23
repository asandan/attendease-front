import { AppState } from "@/shared/types/State.interface";
import { createSelector } from "reselect";

const selectEditProfileState = (state: AppState) => state.profile;
export const getEditProfile = () => createSelector(selectEditProfileState, (state) => state)
