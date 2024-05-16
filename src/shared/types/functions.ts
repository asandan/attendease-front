import { MedicalCertificationState } from "./MedicalCertification.interface";
import { AppSubStates } from "./State.interface";

export type HandleMedicalCertificationChange = (name: AppSubStates, value: string | number | Date | undefined | File) => void