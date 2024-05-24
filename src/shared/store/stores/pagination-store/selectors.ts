import { AppState } from "@/shared/types/State.interface";
import { createSelector } from "reselect";

const selectPaginationState = (state: AppState) => state.pagination;
export const getPagination = () => createSelector(selectPaginationState, (state) => state)
