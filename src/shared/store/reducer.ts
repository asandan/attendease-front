import { combineReducers, AnyAction, Action } from 'redux'

import { reducer as authReducer } from '@/shared/store/stores/auth-store'
import { reducer as weekReducer } from '@/shared/store/stores/attendance-store'
import { AppState } from '@/shared/types/State.interface';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const appReducer = combineReducers({
    auth: authReducer,
    week: weekReducer
  })

  return (state: AppState | undefined, action: AnyAction & { payload: any }) => {
    return appReducer(state, action);
  };
}