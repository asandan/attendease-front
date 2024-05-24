import { createAsyncAction } from "typesafe-actions"
import { ResponseError } from "@/shared/types";
import { CLEAR_STATE, MEDICAL_CERTIFICATION_ACTIONS } from "../medical-certification-store/constants";

export const getMedicalCertification = createAsyncAction(
  MEDICAL_CERTIFICATION_ACTIONS.MEDICAL_CERTIFICATION,
  MEDICAL_CERTIFICATION_ACTIONS.MEDICAL_CERTIFICATION_SUCCESS,
  MEDICAL_CERTIFICATION_ACTIONS.MEDICAL_CERTIFICATION_FAILURE
)<any, any, ResponseError>()  

export const clearMedicalCertificationState = createAsyncAction(
  CLEAR_STATE.CLEAR_STATE,
  CLEAR_STATE.CLEAR_STATE_SUCCESS,
  CLEAR_STATE.CLEAR_STATE_FAILURE
)<any, any, ResponseError>()  