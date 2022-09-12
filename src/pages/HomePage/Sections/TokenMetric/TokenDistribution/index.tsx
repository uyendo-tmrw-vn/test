import React, { ReactElement } from "react";
import { Pie } from "@ant-design/charts";
import { useMediaQuery } from "react-responsive";
import { MetricData } from "../MetricData";
interface Props {}

export default function TokenDistribution({}: Props): ReactElement {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  var data = MetricData.map((e) => {
    return {
      type: e.stage,
      value: parseInt(e.percentage),
      isHetcho: e.isHetchoChartDistr,
    };
  });
  var config = {
    appendPadding: 0,
    padding: isDesktop ? 50 : 80,
    autoFit: true,
    data: data,
    angleField: "value",
    colorField: "type",
    color: [
      "#01445F",
      "#02774D",
      "#EEAC1B",
      "#FC6E30",
      "#BA6B01",
      "#67140E",
      "#63330C",
      "#5A630C",
      "#0C6361",
    ],
    radius: 1,
    innerRadius: 0.68, // do day vong tron
    legend: false,
    label: {
      labelHeight: isDesktop ? 28 : 20,
      style: {
        fill: "#fff",
        fontSize: isDesktop ? 12 : 9,
      },
      type: "spider",
      content: function abcxyz(datum) {
        if (isDesktop) {
          if (datum.isHetcho) {
            return `${datum.type}\n${datum.value} %\n\n`;
          } else {
            return `${datum.type}\n-\n${datum.value} %`;
          }
        } else {
          if (datum.isHetcho) {
            return `${datum.type}\n${datum.value} %\n\n`;
          } else {
            return `${datum.type}\n${datum.value} %`;
          }
        }
      },
      //   content: "{name}\n{percentage}",
      offset: isDesktop ? 10 : 5,
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
