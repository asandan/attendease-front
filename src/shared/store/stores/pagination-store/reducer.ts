import { produce } from "immer";
import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";
import { PaginationState } from "@/shared/types";

export const DEFAULT_PAGINATION_STORE: PaginationState = {
  activePage: 1,
  totalPages: 3,
}

const reducer = createReducer<typeof DEFAULT_PAGINATION_STORE, ActionType<typeof actions>>(DEFAULT_PAGINATION_STORE)
  .handleAction(actions.getPagination.success, (state, action) => produce(state, (nextState) => {
    const stateName = action.payload.name as keyof PaginationState
    nextState[stateName] = action.payload.value
  }))


export default reducer;