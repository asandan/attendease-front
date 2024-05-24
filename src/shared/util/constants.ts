export const TODAY = new Date();

export const WEEK_DAYS = {
  MONDAY: "Mon",
  TUESDAY: "Tue",
  WEDNESDAY: "Wed",
  THURSDAY: "Thu",
  FRIDAY: "Fri",
  SATURDAY: "Sat",
} as const;

export const METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
} as const;

export enum ACCESS_TYPES {
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  ALL = "ALL",
}

export enum CERTIFICATE_STATUSES {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;

export const FIRST_SEMESTER_START_DATE = new Date("September 1, 2023");
export const SECOND_SEMESTER_START_DATE = new Date("January 23, 2024");

export const ITEMS_PER_PAGE = 1;
