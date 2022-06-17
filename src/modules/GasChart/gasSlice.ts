import { createSlice } from "@reduxjs/toolkit";
import { GasDataInterface } from "../../model/GasDataInterface";

export interface GasDataState {
  gas: {
    gas: GasDataInterface;
    gasLoading: boolean;
    gasError: string;
  };
}
export const gasSlice = createSlice({
  name: "gas",
  initialState: {
    gas: [],
    gasLoading: true,
    gasError: "",
  },
  reducers: {
    setGasData: (state, action) => {
      state.gas = action.payload;
    },
    setGasDataLoading: (state, action) => {
      state.gasLoading = !!action.payload;
    },
    setGasDataError: (state, action) => {
      state.gasError = action.payload;
    },
  },
});
export const { setGasData, setGasDataLoading, setGasDataError } =
  gasSlice.actions;

export const selectGasData = (state: GasDataState) => state.gas.gas;
export const selectGasDataLoading = (state: GasDataState) =>
  state.gas.gasLoading;
export const selectGasDataError = (state: GasDataState) =>
  state.gas.gasError;

export const selectGasDataTotalAggregations = (state: GasDataState) => state.gas.gas?.regions[0]?.facilities[0]?.totalAggregations;;
export const selectUtilityMeasurementUnit = (state: GasDataState) => state.gas.gas?.utilityMeasurementUnit;
export default gasSlice.reducer;
