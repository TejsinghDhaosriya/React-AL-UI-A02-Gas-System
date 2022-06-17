import HightCharts, { Options } from "highcharts";
import { useSelector } from "react-redux";
import { selectGasDataMonthwiseAggregations } from "./gasSlice";
import HighchartsReact from "highcharts-react-official";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const darkGray = "#aaaaaa";

export const GasChart = () => {
  const monthwiseAggregations = useSelector(selectGasDataMonthwiseAggregations);
  const options: Options = {
    chart: {
      zoomType: "xy",
      backgroundColor: "#303030",
      height: 600,
    },
    credits: {
      enabled: false,
    },
    subtitle: undefined,
    xAxis: [
      {
        categories: monthwiseAggregations.map((data) => {
          const monthStartDate = new Date(data.monthStartDate);
          return month[monthStartDate.getMonth()];
        }),
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}",
          style: {
            color: darkGray,
          },
        },
        title: {
          text: null,
          style: {
            color: darkGray,
          },
        },
        opposite: true,
      },
      {
        
        // Secondary yAxis
        title: {
          text: null,
          style: {
            color: darkGray,
          },
        },
        labels: {
          format: "{value}thm",
          style: {
            color: darkGray,
          },
        },
      },
      {
        // Tertiary yAxis - behind the graph
        gridLineWidth: 1,
        gridLineColor: "#777777",
        title: {
          text: null,
          style: {
            color: darkGray,
          },
        },
        labels: {
          formatter: (object) => {
            return "$" + parseInt(object.value.toString()) / 1000 + "K";
          },
          style: {
            color: darkGray,
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: false,
    },
    legend: {
      itemStyle: { color: "darkGray" },
      itemHoverStyle: { color: "#dddddd" },
    },
    series: [
      {
        name: "thm Baseline",
        type: "column",
        yAxis: 1,
        color: "#606062",
        borderWidth: 0,
        data: monthwiseAggregations.map((data) => data.baselineConsumption),
        tooltip: {
          valueSuffix: "thm",
        },
      },
      {
        name: "thm Actual",
        type: "column",
        yAxis: 1,
        color: "#1372b2",
        borderWidth: 0,
        data: monthwiseAggregations.map((data) => data.actualConsumption),
        tooltip: {
          valueSuffix: "thm",
        },
      },
      {
        name: "Baseline Cost",
        type: "line",
        dashStyle: "Dash",
        yAxis: 2,
        color: "#a1762b",
        data: monthwiseAggregations.map((data) => data.baselineCost),
        tooltip: {
          valuePrefix: "$",
        },
      },
      {
        name: "Actual Cost",
        type: "line",
        yAxis: 2,
        color: "#e5a743",
        data: monthwiseAggregations.map((data) => data.actualCost),
        tooltip: {
          valueSuffix: "$",
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              height: 200,
            },
            yAxis: [
              {
                labels: {
                  align: "right",
                  x: 0,
                  y: -6,
                },
                showLastLabel: true,
              },
              {
                labels: {
                  align: "left",
                  x: 0,
                  y: -6,
                },
                showLastLabel: true,
              },
              {
                visible: true,
              },
            ],
          },
        },
      ],
    },
  };
  return <HighchartsReact highcharts={HightCharts} options={options} />;
};
export default GasChart;
