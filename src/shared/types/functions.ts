import { AppSubStates } from "./State.interface";

export type HandleChange = (name: AppSubStates, value: string | number | Date | undefined | File) => void 