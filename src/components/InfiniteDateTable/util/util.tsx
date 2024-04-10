import {
  DayAttendance,
  DayAttendanceSchedule,
  GetNextWeek,
} from "@/shared/types/Week.interface";
import { createColumnHelper } from "@tanstack/react-table";
import { generateWeek } from ".";

export const dayColumnHelper = createColumnHelper<DayAttendanceSchedule>();

export const DAYS_DEFAULT_COLUMN = [
  dayColumnHelper.accessor("subject", {
    header: "Subject",
  }),
];

export const getColumnDefs: GetNextWeek = (startDate: Date) => {
  const week = generateWeek(startDate);

  const columns = week.map((date) =>
    dayColumnHelper.accessor(`d${date.replaceAll(".", "")}`, {
      header: date,
      cell(props) {
        const value = props.getValue() as DayAttendance;
        if (!value) return 0;

        return (
          <span className="flex flex-row">
            <span>{value.didAttend}</span>
          </span>
        );
      },
    })
  );

  return {
    columns,
  };
};
