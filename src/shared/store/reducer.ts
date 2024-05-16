import { combineReducers, AnyAction } from 'redux'

import { reducer as authReducer } from '@/shared/store/stores/auth-store'
import { reducer as weekReducer } from '@/shared/store/stores/attendance-store'
import { reducer as medicalCertificationReducer } from '@/shared/store/stores/medical-certification-store'
import { reducer as medicalCertificationAdminReducer } from '@/shared/store/stores/medical-certifications-admin-store'
import { reducer as paginationReducer } from '@/shared/store/stores/pagination-store'
import { AppState } from '@/shared/types/State.interface';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const appReducer = combineReducers({
    auth: authReducer,
    week: weekReducer,
    medicalCertification: medicalCertificationReducer,
    medicalCertificationAdmin: medicalCertificationAdminReducer,
    pagination: paginationReducer,
  })

  return (state: AppState | undefined, action: AnyAction & { payload: any }) => {
    return appReducer(state, action);
  };
}