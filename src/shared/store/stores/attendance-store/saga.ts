import { api } from '@/api'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { ResponseError } from '@/shared/types'
import { selectors as weekSelectors } from "@/shared/store/stores/attendance-store";
import { getRows } from './actions';

function* fetchAttendanceTable() {
  try {
    //@ts-ignore
    const { currentWeek } = yield select(weekSelectors.getWeek())
    const userId = 1
    //@ts-ignore
    const response = yield call(api.getAttendanceRows, {
      userId,
      currentWeek
    })

    yield put(getRows.success(response.data))
  } catch (e) {
    const err = e as ResponseError
    yield put(getRows.failure(err))
  }
}



function* attendanceSaga() {
  yield takeLatest(getRows.request, fetchAttendanceTable)
}

export default attendanceSaga;