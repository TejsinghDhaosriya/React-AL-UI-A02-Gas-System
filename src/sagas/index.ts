import { all } from "redux-saga/effects";
import { gasSagas } from "../modules/GasChart/sagas";


export default function* rootSaga() {
  yield all([...gasSagas]);
}
