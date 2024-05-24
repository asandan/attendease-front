import { combineReducers, AnyAction } from 'redux'

import { reducer as authReducer } from '@/shared/store/stores/auth-store'
import { reducer as weekReducer } from '@/shared/store/stores/attendance-store'
import { reducer as medicalCertificationReducer } from '@/shared/store/stores/medical-certification-store'
import { reducer as medicalCertificationAdminReducer } from '@/shared/store/stores/medical-certifications-admin-store'
import { reducer as paginationReducer } from '@/shared/store/stores/pagination-store'
import { reducer as profileReducer } from '@/shared/store/stores/profile-store'
import { reducer as editProfileReducer } from '@/shared/store/stores/edit-user-profile-store'
import { reducer as markStudentReducer } from '@/shared/store/stores/mark-student-store'
import { AppState } from '@/shared/types/State.interface';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const appReducer = combineReducers({
    auth: authReducer,
    week: weekReducer,
    medicalCertification: medicalCertificationReducer,
    medicalCertificationAdmin: medicalCertificationAdminReducer,
    pagination: paginationReducer,
    profile: profileReducer,
    editProfile: editProfileReducer,
    markStudent: markStudentReducer,
  })

  return (state: AppState | undefined, action: AnyAction & { payload: any }) => {
    return appReducer(state, action);
  };
}