import { api } from '@/api'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { ResponseError } from '@/shared/types'
import { selectors as weekSelectors } from "@/shared/store/stores/attendance-store";

function* fetchSubjects() {
  try {
    //@ts-ignore
    const { currentWeek } = yield select(weekSelectors.getWeek())
    const userId = 1
    //@ts-ignore
    const response = yield call(api.getSubjects, {
      userId,
      currentWeek
    })

  } catch (e) {
    const err = e as ResponseError
  }
}



function* attendanceSaga() {
}

export default attendanceSaga;