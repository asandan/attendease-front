import { combineReducers, AnyAction } from 'redux'

import { reducer as authReducer } from '@/shared/store/stores/auth-store'
import { reducer as weekReducer } from '@/shared/store/stores/attendance-store'
import { reducer as medicalCertificationReducer } from '@/shared/store/stores/medical-certification-store'
import { reducer as userReducer } from '@/shared/store/stores/user-store'
import { AppState } from '@/shared/types/State.interface';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const appReducer = combineReducers({
    auth: authReducer,
    week: weekReducer,
    user: userReducer,
    medicalCertification: medicalCertificationReducer,
  })

  return (state: AppState | undefined, action: AnyAction & { payload: any }) => {
    return appReducer(state, action);
  };
}