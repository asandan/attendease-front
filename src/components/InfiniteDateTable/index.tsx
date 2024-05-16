import { Table } from "../Table";
import { FC, MouseEvent, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { WEEKS_LIST, getDateOneWeekAgo, getDateOneWeekLater } from "./util";
import { useDispatch, useSelector } from "react-redux";
import { selectors as weekSelectors } from "@/shared/store/stores/attendance-store";
import {
  getRows,
  getWeek,
  WeekSuccess,
} from "@/shared/store/stores/attendance-store/actions";
import { GetAttendanceRowsResponse, WeekRow } from "@/shared";
import { Button } from "../ui";
import { Dropdown } from "./components";
import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export type InfiniteDateTableProps = {
  columns: ColumnDef<GetAttendanceRowsResponse, any>[];
};

export const InfiniteDateTable: FC<InfiniteDateTableProps> = ({ columns }) => {
  const dispatch = useDispatch();
  const { currentWeek } = useSelector(weekSelectors.getWeek());
  const session = useSession() as any;
  const userId = session.data.user.id;


  // const { data: rows } = useQuery<{ data: GetAttendanceRowsResponse[] }>({
  //   queryKey: ["attendance-rows", currentWeek],
  //   queryFn: api.getAttendanceRows({ userId, currentWeek }),
  // });

  const data = useReactTable({
    data: [] || [],
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

  const handleWeekChange = (currentWeek: number) => {
    dispatch(getWeek.success({ currentWeek }));
  };

  const markMyself = async () => {
    try {
      await api.markMyself(+userId)();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col w-full px-6 py-4 gap-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-8">
          <span className="ml-9 font-semibold self-center">
            Current week: <span className="font-bold">{currentWeek}</span>
          </span>
          <Dropdown
            title="Weeks"
            buttonTitle="Select week"
            items={WEEKS_LIST}
            onChange={handleWeekChange}
          />
        </div>
        <Button
          variant="outline"
          className="w-24 h-8 mr-10 dark:bg-black"
          onClick={markMyself}
        >
          Mark myself
        </Button>
      </div>
      <div className="flex flex-row w-full">
        <ChevronLeft
          className="mt-5 mr-3 cursor-pointer"
          data-direction="left"
          onClick={handleClick}
        />
        <div className="flex flex-row border rounded-lg px-4 py-2 w-full">
          <Table table={data} />
        </div>
        <ChevronRight
          className="mt-5 ml-3 cursor-pointer"
          data-direction="right"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
