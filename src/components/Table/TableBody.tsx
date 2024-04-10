import { CommonTableProps } from "@/shared/types";
import { FC } from "react";
import { TableCell, TableRow, TableBody as _TableBody } from "../ui/table";
import { flexRender } from "@tanstack/react-table";

export const TableBody: FC<CommonTableProps> = ({ table }) => {
  return (
    <_TableBody>
      {table.getRowModel().rows.map((row, i: number) => {
        return (
          <TableRow key={i}>
            {row.getVisibleCells().map((cell, key: number) => (
              <TableCell key={key} colSpan={0}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </_TableBody>
  );
};
