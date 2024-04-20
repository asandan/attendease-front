import {
  WeekAttendance,
  WeekAttendanceSchedule,
  GetNextWeek,
  WeekColumn,
} from "@/shared/types/Week.interface";
import { createColumnHelper } from "@tanstack/react-table";
import { WEEK_DAYS } from "@/shared";

export const dayColumnHelper = createColumnHelper<WeekAttendanceSchedule>();

export const DAYS_DEFAULT_COLUMN = [
  dayColumnHelper.accessor("subject", {
    header: "Subject",
  }),
];

export const getColumnDefs: GetNextWeek<WeekColumn> = (startDate: Date) => {
  const week = Object.keys(WEEK_DAYS) as (keyof typeof WEEK_DAYS)[];

  const columns = week.map((day) =>
    dayColumnHelper.accessor(day, {
      header: WEEK_DAYS[day],
      cell(props) {
        const value = props.getValue() as WeekAttendance;
        if (!value) return 0;

        return (
          <span className="flex flex-row">
            <span>{value.ratio}</span>
          </span>
        );
      },
    })
  );

  return {
    columns,
  };
};
