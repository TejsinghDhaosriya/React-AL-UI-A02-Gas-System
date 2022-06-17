import MaterialTooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import "./GasHeader.css";
import { useSelector } from "react-redux";
import {
  selectGasDataTotalAggregations,
  selectUtilityMeasurementUnit,
} from "../GasChart/gasSlice";
import ALHeader from "../../wrappers/ALHeader";
const GasHeader = () => {
  const gasDataTotalAggregations = useSelector(selectGasDataTotalAggregations);
  const utilityMeasurementUnit = useSelector(selectUtilityMeasurementUnit);

  return (
    <>
      <div className="gas-header-container">
        <h3 className="gas-header-title">Gas Performance</h3>
        <div className="gas-tooltip">
          <MaterialTooltip title="Gas Performance System">
            <InfoIcon />
          </MaterialTooltip>
        </div>
      </div>
      <div className="gas-header-data">
        <ALHeader
          name="Actual"
          value={
            gasDataTotalAggregations.totalActualConsumption +
            utilityMeasurementUnit
          }
        />
        <ALHeader
          name="Baseline"
          value={
            gasDataTotalAggregations.totalBaselineConsumption +
            utilityMeasurementUnit
          }
        />
        <ALHeader
          name="Savings"
          value={
            gasDataTotalAggregations.totalConsumptionSavings +
            utilityMeasurementUnit
          }
          percentage={
            gasDataTotalAggregations.totalConsumptionSavingsPercentage
          }
        />
        <div
          style={{ borderLeft: "1px solid white", margin: "0px 25px 0px" }}
        ></div>
        <ALHeader
          name="Actual Cost"
          value={"$" + gasDataTotalAggregations.totalActualCost}
        />
        <ALHeader
          name="Baseline Cost"
          value={"$" + gasDataTotalAggregations.totalBaselineCost}
        />
        <ALHeader
          name="Savings"
          value={"$" + gasDataTotalAggregations.totalCostSavings}
          percentage={gasDataTotalAggregations.totalCostSavingsPercentage}
        />
      </div>
    </>
  );
};

export default GasHeader;
