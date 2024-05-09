import { MedicalCertificationState } from "./MedicalCertification.interface";

export type HandleMedicalCertificationChange = (name: keyof MedicalCertificationState, value: string | Date | undefined | File) => void