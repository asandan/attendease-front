export const TODAY = new Date();

export const WEEK_DAYS = {
  MONDAY: "Mon",
  TUESDAY: "Tue",
  WEDNESDAY: "Wed",
  THURSDAY: "Thu",
  FRIDAY: "Fri",
  SATURDAY: "Sat",
}

export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;

export const FIRST_SEMESTER_START_DATE = new Date(`09-1-${TODAY.getFullYear()}`);
export const SECOND_SEMESTER_START_DATE = new Date(`01-23-${TODAY.getFullYear()}`);

export const METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};
