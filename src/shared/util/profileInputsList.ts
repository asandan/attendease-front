import { AppSubStates, ProfileState } from "../types";
import { ACCESS_TYPES } from "./constants";

export type ProfileInputParams = {
  id: keyof ProfileState;
  label: string;
  placeholder: string;
  type: string;
  canEdit?: ACCESS_TYPES[];
  value?: string;
  state?: AppSubStates;
  role?: ACCESS_TYPES;
}

export const PROFILE_INPUTS: ProfileInputParams[] = [
  {
    id: "name",
    label: "Name",
    placeholder: "Enter your name",
    type: "text",
    canEdit: [ACCESS_TYPES.ADMIN],
    role: ACCESS_TYPES.ALL,
  },
  {
    id: "surname",
    label: "Surname",
    placeholder: "Enter your surname",
    type: "text",
    canEdit: [ACCESS_TYPES.ADMIN],  
    role: ACCESS_TYPES.ALL,
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    state: "email",
    canEdit: [ACCESS_TYPES.ALL],  
    role: ACCESS_TYPES.ALL,
  },
  {
    id: "oldPassword",
    label: "Old password",
    placeholder: "Enter your old password",
    type: "password",
    state: "oldPassword",
    canEdit: [ACCESS_TYPES.ALL],  
    role: ACCESS_TYPES.ALL,
  },
  {
    id: "newPassword",
    label: "New password",
    placeholder: "Enter your new password",
    type: "password",
    state: "newPassword",
    canEdit: [ACCESS_TYPES.ALL],  
    role: ACCESS_TYPES.ALL,
  },
  {
    id: "group",
    label: "Group",
    placeholder: "Choose your group",
    type: "text",
    canEdit: [],
    role: ACCESS_TYPES.STUDENT,
  },
  {
    id: "faculty",
    label: "Faculty",
    placeholder: "Choose your faculty",
    type: "text",
    canEdit: [],
    role: ACCESS_TYPES.STUDENT,
  },
  {
    id: "ep",
    label: "Education program",
    placeholder: "Enter your Education program",
    type: "text",
    canEdit: [],
    role: ACCESS_TYPES.STUDENT,
  },
  {
    id: "subject",
    label: "Subject",
    placeholder: "Enter your subject",
    type: "text",
    canEdit: [],
    role: ACCESS_TYPES.TEACHER,
  }
];