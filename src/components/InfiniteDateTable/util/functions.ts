export const generateColumns = (
  startDate: Date,
  defaultColumns: any[],
  getColumnDefs: any
) => {
  const { columns } = getColumnDefs(startDate);
  const newColumns = [...defaultColumns, ...columns];
  return newColumns;
};

export const getDateOneWeekAgo = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 7);
  return newDate;
};

export const getDateOneWeekLater = (date: Date) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 7);
  return newDate;
};

export const generateWeek = (startDate: Date): string[] => {
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    return date.toLocaleDateString("ru-RU");
  });
};


