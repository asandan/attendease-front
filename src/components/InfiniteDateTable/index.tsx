import { Table } from "../Table";
import { FC, MouseEvent, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getDateOneWeekAgo, getDateOneWeekLater } from "./util";
import { useDispatch, useSelector } from "react-redux";
import { selectors as weekSelectors } from "@/shared/store/stores/attendance-store";
import {
  getWeek,
  WeekSuccess,
} from "@/shared/store/stores/attendance-store/actions";
import { WeekRow } from "@/shared";

export type InfiniteDateTableProps = {
  columns: ColumnDef<WeekRow, any>[];
};

export const InfiniteDateTable: FC<InfiniteDateTableProps> = ({ columns }) => {
  const dispatch = useDispatch();
  const { currentWeek, rows } = useSelector(weekSelectors.getWeek());

  // useEffect(() => {
  //   dispatch(getWeek.request(undefined));
  // }, [dispatch]);


  const data = useReactTable({
    data: rows,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleClick = (
    event: MouseEvent<SVGSVGElement, globalThis.MouseEvent>
  ) => {
    const direction = event.currentTarget.dataset.direction as "left" | "right";
    const newWeek =
      direction === "left"
        ? getDateOneWeekAgo(currentWeek)
        : getDateOneWeekLater(currentWeek);

    const payload: WeekSuccess = {
      currentWeek: newWeek,
    };

    dispatch(getWeek.success(payload));
  };

  return (
    <div className="flex flex-col w-full px-6 py-4">
      <span>
        Current week: <span className="font-bold">{currentWeek}</span>
      </span>
      <div className="flex flex-row">
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
    </div>
  );
};
