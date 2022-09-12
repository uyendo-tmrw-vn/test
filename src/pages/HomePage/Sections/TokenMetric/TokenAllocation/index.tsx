import React, { ReactElement } from "react";
import { Pie } from "@ant-design/charts";
import { useMediaQuery } from "react-responsive";

interface Props {}

export default function TokenAllocation({}: Props): ReactElement {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  var data = [
    {
      type: "Human\nResource",
      value: 25,
    },
    {
      type: "Game\nDevelopment",
      value: 20,
    },
    {
      type: "Liquidity \n& Exchange",
      value: 25,
    },
    {
      type: "Marketing \n& Community",
      value: 15,
    },
    {
      type: "Operation",
      value: 15,
    },
  ];
  var config = {
    appendPadding: 0,
    padding: isDesktop ? 50 : 80,
    autoFit: true,
    data: data,
    angleField: "value",
    colorField: "type",
    color: ["#67350F", "#67140E", "#0E3766", "#027B4F", "#BE6D02"],
    radius: 1,
    innerRadius: 0.68,
    legend: false,
    label: {
      labelHeight: isDesktop ? 28 : 20,
      style: {
        fill: "#fff",
        fontSize: isDesktop ? 12 : 9,
      },
      type: "spider",
      content: function abcxyz(datum) {
        if (datum.isHetcho) {
          return `${datum.type}\n${datum.value} %\n\n`;
        } else {
          return `${datum.type}\n-\n${datum.value} %`;
        }
      },
      offset: isDesktop ? 12 : 5,
      layout: {
        type: "fixedOverlap",
      },
    },
    style: {
      opacity: 1,
    },
    pieStyle: {
      strokeOpacity: 0.1,
      cursor: "pointer",
    },
    statistic: null,
    tooltip: {
      formatter: function formatter(datum) {
        return {
          name: datum.type,
          value: `${datum.value} %`,
        };
      },
    },
  };
  return <Pie {...config} />;
}
