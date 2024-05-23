import { ACCESS_TYPES } from "./constants";
import { PROFILE_INPUTS } from "./profileInputsList";

export const getProfileInputs = (role: ACCESS_TYPES) => {
  return PROFILE_INPUTS
    .filter(({ role: accessType }) => accessType === role || accessType === ACCESS_TYPES.ALL)
    .map(el => el.canEdit?.includes(role) || el.canEdit?.includes(ACCESS_TYPES.ALL) ?
      ({ ...el, canEdit: true })
      :
      ({ ...el, canEdit: false }))
} 