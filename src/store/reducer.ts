import { combineReducers, AnyAction, Action } from 'redux'

import { reducer as authReducer } from '@/pages/auth/store'
import { AppState } from '@/types/State.interface';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const appReducer = combineReducers({
    auth: authReducer
  })

  return (state: AppState | undefined, action: AnyAction & { payload: any }) => {
    return appReducer(state, action);
  };
}