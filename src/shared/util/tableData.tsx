import { TableData } from "@/shared/types";
import {
  createColumnHelper,
} from "@tanstack/react-table";
const columnHelper = createColumnHelper<any>();

export const TABLE_DATA: TableData = {
  columns: [
    columnHelper.accessor("d4117024", {
      header: "11.04.2024",
      enableColumnFilter: false,
    }),
    columnHelper.accessor("d4112024", {
      header: "12.04.2024",
      enableColumnFilter: false,
    }),
    columnHelper.accessor("d4122024", {
      header: "13.04.2024",
      enableColumnFilter: false,
    }),
    columnHelper.accessor("d4132024", {
      header: "14.04.2024",
      enableColumnFilter: false,
    }),
    columnHelper.accessor("d4114024", {
      header: "15.04.2024",
      enableColumnFilter: false,
    }),
    columnHelper.accessor("d4115024", {
      header: "16.04.2024",
      enableColumnFilter: false,
    }),
    columnHelper.accessor("d4116024", {
      header: "17.04.2024",
      enableColumnFilter: false,
    }),
  ],
  data: [],
};
