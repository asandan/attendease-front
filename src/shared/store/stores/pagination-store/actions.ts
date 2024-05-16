import { createAsyncAction } from "typesafe-actions"
import { ResponseError } from "@/shared/types";
import { PAGINATION_ACTIONS } from "./constants";

export const getPagination = createAsyncAction(
  PAGINATION_ACTIONS.PAGINATION,
  PAGINATION_ACTIONS.PAGINATION_SUCCESS,
  PAGINATION_ACTIONS.PAGINATION_FAILURE
)<any, any, ResponseError>()
