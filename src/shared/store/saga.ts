  import { all, fork } from "redux-saga/effects";
import attendanceSaga from "./stores/attendance-store/saga";

const allSagas = [
  attendanceSaga
]

export default function* appSagas() {
  yield all(allSagas.map(fork))
}