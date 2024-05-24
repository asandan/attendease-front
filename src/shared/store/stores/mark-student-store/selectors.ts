import { AppState } from "@/shared/types/State.interface";
import { createSelector } from "reselect";

const selectMarkStudentState = (state: AppState) => state.markStudent;
export const getMarkStudent = () => createSelector(selectMarkStudentState, (state) => state)
