import { createAsyncAction } from "typesafe-actions"
import { ResponseError } from "@/shared/types";
import { MARK_STUDENT_ACTIONS } from "./constants";

export const getMarkStudentData = createAsyncAction(
  MARK_STUDENT_ACTIONS.MARK_STUDENT,
  MARK_STUDENT_ACTIONS.MARK_STUDENT_SUCCESS,
  MARK_STUDENT_ACTIONS.MARK_STUDENT_FAILURE
)<any, any, ResponseError>();
