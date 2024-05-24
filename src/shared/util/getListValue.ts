import { List } from "../types";

export const getListValue = (list: List[], target: string) => {
  return target
    ? `${list.find((subject) => subject.value === +target)?.label}`
    : undefined;
}