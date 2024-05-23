import {
  GetNextWeek,
  WeekColumn,
} from "@/shared/types/Week.interface";
import { createColumnHelper } from "@tanstack/react-table";
import { GetAttendanceRowsResponse, WEEK_DAYS, getColorByPercentage } from "@/shared";

export const dayColumnHelper = createColumnHelper<GetAttendanceRowsResponse>();

export const DAYS_DEFAULT_COLUMN = [
  dayColumnHelper.accessor("subject", {
    header: "Subject",
    cell(props) {
      const value = props.getValue();
      if (!value) return "N/A";
      return (
        <span className="font-semibold">{value}</span>
      );
    },
  }),
];

export const getColumnDefs: GetNextWeek<WeekColumn> = () => {
  const week = Object.keys(WEEK_DAYS) as (keyof typeof WEEK_DAYS)[];

  const columns = week.map((day) =>
    dayColumnHelper.accessor(day, {
      header: WEEK_DAYS[day],
      cell(props) {
        const value = props.getValue() as number;
        if (!value && value !== 0) {
          return <span className="font-semibold text-gray-400 ">N/A</span>;
        }
        return (
          <span
            className={`flex flex-row font-semibold ${getColorByPercentage(
              +value
            )}`}
          >
            <span>{+value.toFixed(1) * 100}%</span>
          </span>
        );
      },
    })
  );

  return {
    columns,
  };
};
