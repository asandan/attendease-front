import { createAsyncAction } from "typesafe-actions"
import { RefillPayload, RefillPayloadValue, ResponseError } from "@/shared/types";
import { CLEAR_STATE, MEDICAL_CERTIFICATION_ADMIN_ACTIONS, REFILL_STATUSES } from "./constants";

export const getMedicalCertificationAdminData = createAsyncAction(
  MEDICAL_CERTIFICATION_ADMIN_ACTIONS.MEDICAL_CERTIFICATION_ADMIN,
  MEDICAL_CERTIFICATION_ADMIN_ACTIONS.MEDICAL_CERTIFICATION_ADMIN_SUCCESS,
  MEDICAL_CERTIFICATION_ADMIN_ACTIONS.MEDICAL_CERTIFICATION_ADMIN_FAILURE
)<any, any, ResponseError>()

export const refillMedicalCertificationAdminData = createAsyncAction(
  REFILL_STATUSES.REFILL_STATUSES,
  REFILL_STATUSES.REFILL_STATUSES_SUCCESS,
  REFILL_STATUSES.REFILL_STATUSES_FAILURE,
)<any, RefillPayload, ResponseError>()

export const clearMedicalCertificationAdminData = createAsyncAction(
  CLEAR_STATE.CLEAR_STATE,
  CLEAR_STATE.CLEAR_STATE_SUCCESS,
  CLEAR_STATE.CLEAR_STATE_FAILURE,
)<any, any, ResponseError>()