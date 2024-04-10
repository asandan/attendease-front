import { flexRender } from "@tanstack/react-table";
import { TableHead, TableRow, TableHeader as _TableHeader } from "../ui/table";
import { CommonTableProps } from "@/shared/types";
import { FC } from "react";

export const TableHeader: FC<CommonTableProps> = ({ table }) => {
  return (
    <_TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead key={header.id} colSpan={header.colSpan}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </_TableHeader>
  );
};
