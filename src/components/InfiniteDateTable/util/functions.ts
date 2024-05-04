import { GetNextWeek, WeekColumn } from "@/shared";

export const generateColumns = (
  startDate: Date,
  defaultColumns: any[],
  getColumnDefs: GetNextWeek<WeekColumn>
) => {
  const { columns } = getColumnDefs(startDate);
  const newColumns = [...defaultColumns, ...columns];
  return newColumns;
};

export const getDateOneWeekAgo = (week: number) => {
  if( week === 1) return 1
  return week - 1;
};

export const getDateOneWeekLater = (week: number) => {
  if( week === 15) return 15
  return week + 1;
};

export const generateWeek = (startDate: Date): string[] => {
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    return date.toLocaleDateString("ru-RU");
  });
};


