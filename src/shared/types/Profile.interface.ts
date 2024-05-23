import { Account, Group } from "./common";

export type ProfileState = {
  name: string;
  surname: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  facultyId?: string | number;
  faculty?: string;
  epId?: string | number;
  ep?: string;
  groupId?: string | number;
  group?: string;
  subjectId?: string | number;
  subject?: string
}

export interface StudentProfileResponse {
  id: number;
  accountId: number;
  groupId: number;
  account: Account;
  group: Group;
}

export interface TeacherProfileResponse {
  id: number;
  accountId: number;
  facultyId: number;
  account: Account;
}
export interface AdminProfileResponse {
  id: number;
  account: Account;
}

