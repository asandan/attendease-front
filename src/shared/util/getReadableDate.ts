export const getReadableDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US");
}