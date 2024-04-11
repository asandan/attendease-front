import { AccessorKeyColumnDef } from "@tanstack/react-table";

export interface WeekState {
  columns: WeekColumn[];
  rows: WeekRow[];
  currentDate: Date;
}


export type WeekAttendance = { didAttend: boolean };

export type WeekAttendanceSchedule = {
  [key: string]: WeekAttendance | undefined;
};

export type WeekColumn = AccessorKeyColumnDef<
  WeekAttendanceSchedule,
  WeekAttendance | undefined
>;

export type WeekRow = Record<string, WeekAttendance>;

export type GetNextWeek<T> = (startDate: Date) => { columns: T[] };
