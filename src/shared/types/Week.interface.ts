import { WEEK_DAYS } from './../util/constants';
import { AccessorKeyColumnDef } from "@tanstack/react-table";
import { GetAttendanceRowsResponse } from './Attendance.interface';

export interface WeekState {
  rows: any[];
  currentWeek: number;
}

export type WeekAttendance = { ratio: number };



export type WeekColumn = AccessorKeyColumnDef<
  GetAttendanceRowsResponse,
  number
>;

export type WeekRow = Record<string, WeekAttendance>;

export type GetNextWeek<T> = (startDate: Date) => { columns: T[] };
