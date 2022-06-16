import { put, call } from "redux-saga/effects";
import { GasDataInterface } from "../../../model/GasDataInterface";
import { getGasDataList } from "../api";
import { setGasDataLoading, setGasData, setGasDataError } from "../gasSlice";

export function* gasDataListingSaga() {
  try {
    yield put(setGasDataLoading(true));
    const fetchedGasData: Response = yield call(getGasDataList);
    yield put(setGasData(fetchedGasData.data));
    yield put(setGasDataLoading(false));
  } catch (err: any) {
    yield put(setGasDataError(err.message));
    yield put(setGasDataLoading(false));
  }
}

export default interface Response {
  data: GasDataInterface;
}
