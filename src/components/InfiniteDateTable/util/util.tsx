import {
  WeekAttendance,
  WeekAttendanceSchedule,
  GetNextWeek,
  WeekColumn,
} from "@/shared/types/Week.interface";
import { createColumnHelper } from "@tanstack/react-table";
import { WEEK_DAYS, getColorByPercentage } from "@/shared";

export const dayColumnHelper = createColumnHelper<WeekAttendanceSchedule>();

export const DAYS_DEFAULT_COLUMN = [
  dayColumnHelper.accessor("subject", {
    header: "Subject",
    cell(props) {
      const value = props.getValue();
      if (!value) return 'N/A';
      return (
        <span className="font-semibold">{value as unknown as string}</span>
      )
    }
  }),
];

export const getColumnDefs: GetNextWeek<WeekColumn> = () => {
  const week = Object.keys(WEEK_DAYS) as (keyof typeof WEEK_DAYS)[];

  const columns = week.map((day) =>
    dayColumnHelper.accessor(day, {
      header: WEEK_DAYS[day],
      cell(props) {
        const value = props.getValue() as WeekAttendance;
        if (!value) return 'N/A';
        return (
          <span className={`flex flex-row font-semibold ${getColorByPercentage(+value)}`}>
            <span>{+value * 100}%</span>
          </span>
        );
      },
    })
  );

  return {
    columns,
  };
};
