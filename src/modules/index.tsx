import GasChart from "./GasChart/GasChart";
import GasHeader from "./GasHeader/GasHeader";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gasDataListing } from "./GasChart/actions";
import { selectGasDataLoading } from "./GasChart/gasSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/material";

const GasSystem = () => {
  const gasDataLoading = useSelector(selectGasDataLoading);
  const disptach = useDispatch();
  useEffect(() => {
    disptach(gasDataListing());
  }, [disptach]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Gas System</h1>
      {gasDataLoading ? (
        <Stack
          alignItems="center"
          justifyContent="center"
          style={{ paddingTop: "50vh" }}
        >
          <CircularProgress />
        </Stack>
      ) : (
        <div>
          <GasHeader />
          <GasChart />
        </div>
      )}
    </>
  );
};

export default GasSystem;
