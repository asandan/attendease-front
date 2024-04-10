import { AccessorKeyColumnDef } from "@tanstack/react-table";

export interface WeekState {
  columns: DayColumn[];
  rows: DayRow[];
  currentDate: Date;
}


export type DayAttendance = { didAttend: boolean };

export type DayAttendanceSchedule = {
  [key: string]: DayAttendance | undefined;
};

export type DayColumn = AccessorKeyColumnDef<
  DayAttendanceSchedule,
  DayAttendance | undefined
>;

export type DayRow = Record<string, DayAttendance>;

export type GetNextWeek = (startDate: Date) => { columns: DayColumn[] };
