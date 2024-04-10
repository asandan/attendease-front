import { AccessorKeyColumnDef, Table as TableType } from "@tanstack/react-table";

export interface CommonTableProps {
  table: TableType<any>;
};

export interface TableData {
  columns: AccessorKeyColumnDef<any, any>[];
  data: any[];
}