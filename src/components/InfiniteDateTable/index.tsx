import { Table } from "../Table";
import { FC, MouseEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  DAYS_DEFAULT_COLUMN,
  generateColumns,
  getColumnDefs,
  getDateOneWeekAgo,
  getDateOneWeekLater,
} from "./util";
import { useDispatch, useSelector } from "react-redux";
import { selectors as weekSelectors } from "@/shared/store/stores/attendance-store";
import { getWeek, WeekSuccess } from "@/shared/store/stores/attendance-store/actions";

export const InfiniteDateTable: FC = () => {
  const { currentDate, rows, columns } = useSelector(weekSelectors.getWeek());
  const dispatch = useDispatch();

  const data = useReactTable({
    data: rows,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleClick = (
    event: MouseEvent<SVGSVGElement, globalThis.MouseEvent>
  ) => {
    const direction = event.currentTarget.dataset.direction as "left" | "right";
    const newDate =
      direction === "left"
        ? getDateOneWeekAgo(currentDate)
        : getDateOneWeekLater(currentDate);

    const newColumns = generateColumns(
      newDate,
      DAYS_DEFAULT_COLUMN,
      getColumnDefs
    );

    const payload: WeekSuccess = {
      columns: newColumns,
      currentDate: newDate,
    };

    dispatch(getWeek.success(payload));
  };

  return (
    <div className="px-6 py-4 w-full flex flex-row">
      <ChevronLeft
        className="mt-9 mr-3 cursor-pointer"
        data-direction="left"
        onClick={handleClick}
      />
      <ScrollArea className="w-full">
        <Table table={data} />
      </ScrollArea>
      <ChevronRight
        className="mt-9 ml-3 cursor-pointer"
        data-direction="right"
        onClick={handleClick}
      />
    </div>
  );
};
