import { api } from '@/api'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { ResponseError } from '@/shared/types'
import { selectors as weekSelectors } from "@/shared/store/stores/attendance-store";
import { getWeek } from './actions';
import { WEEK_ACTIONS } from './constants';

function* fetchAttendanceTable() {
  try {
    //@ts-ignore
    const { currentWeek } = yield select(weekSelectors.getWeek())
    //@ts-ignore
    const response = yield call(api.getAttendanceRows, {
      userId: 3,
      currentWeek
    })
    yield put(getWeek.success(response.data))
  } catch (e) {
    const err = e as ResponseError
    yield put(getWeek.failure(err))
  }
}



function* attendanceSaga() {
  yield takeLatest(getWeek.request, fetchAttendanceTable)
}

export default attendanceSaga;