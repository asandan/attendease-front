import { WEEK_DAYS } from './../util/constants';
import { AccessorKeyColumnDef } from "@tanstack/react-table";

export interface WeekState {
  rows: WeekRow[];
  currentWeek: number;
}

export type WeekAttendance = { ratio: number };

export type WeekAttendanceSchedule = {
  [key in keyof typeof WEEK_DAYS | "subject"]: WeekAttendance | undefined;
};

export type WeekColumn = AccessorKeyColumnDef<
  WeekAttendanceSchedule,
  WeekAttendance | undefined
>;

export type WeekRow = Record<string, WeekAttendance>;

export type GetNextWeek<T> = (startDate: Date) => { columns: T[] };
