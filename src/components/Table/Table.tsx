import { FC } from "react";
import { Table as _Table } from "@/components/ui/table";
import { CommonTableProps } from "@/shared/types/Table.interface";
import { TableHeader, TableBody } from ".";

export const Table: FC<CommonTableProps> = ({ table }) => {
  return (
    <_Table>
      <TableHeader table={table} />
      <TableBody table={table} />
    </_Table>
  );
};
