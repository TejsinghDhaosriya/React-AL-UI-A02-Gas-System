export interface GasDataInterface {
    organizationId: string;
    organizationName: string;
    aggregationsStartDate: Date;
    aggregationsEndDate: Date;
    utilityType: string;
    utilityMeasurementUnit: string;
    utilityCostCurrency: string;
    regions: Region[];
  }
  
  export interface Region {
    regionId: string;
    regionName: string;
    facilities: Facility[];
  }
  
  export interface Facility {
    facilityId: string;
    facilityName: string;
    totalAggregations: TotalAggregations;
    monthwiseAggregations: MonthwiseAggregation[];
    utilityMeters: UtilityMeter[];
  }
  
  export interface TotalAggregations {
    totalActualConsumption: number;
    totalBaselineConsumption: number;
    totalActualCost: number;
    totalBaselineCost: number;
    totalCostSavings: number;
    totalConsumptionSavingsPercentage: number;
    totalConsumptionSavings: number;
    totalCostSavingsPercentage: number;
  }
  

  export interface MonthwiseAggregation {
    actualConsumption: number;
    actualCost: number;
    baselineConsumption: number;
    baselineCost: number;
    monthStartDate: Date;
    monthEndDate: Date;
    isCompleted: boolean;
    consumptionProcessedDays: number;
  }
  
  export interface UtilityMeter {
    meterId: string;
    meterNumber: string;
    meterType: string;
    aggregations: Aggregations;
  }
  
  export interface Aggregations {
    actualConsumption: number;
    actualCost: number;
    baselineConsumption: number;
    baselineCost: number;
    totalCostSavings: number;
    totalCostSavingsPercentage: number;
    totalConsumptionSavings: number;
    totalConsumptionSavingsPercentage: number;
  }
  