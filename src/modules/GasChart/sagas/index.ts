import { takeEvery } from "redux-saga/effects";
import { SAGA_FETCH_GAS_DATA } from "../actions";
import { gasDataListingSaga } from "./sagas";

export const gasSagas = [takeEvery(SAGA_FETCH_GAS_DATA, gasDataListingSaga)];
