import React, { useState, useEffect } from "react";
import { Pie, measureTextWidth } from "@ant-design/charts";

export const Main: React.FC = () => {
  var data = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: "value",
    colorField: "type",
    color: ["#19CDD7", "#DDB27C", "#23456F"],
    radius: 1,
    innerRadius: 0.64,
    // meta: {
    //   value: {
    //     formatter: function formatter(v) {
    //       return "".concat(v, " \xA5");
    //     },
    //   },
    // },
    label: {
      type: "spider",
      labelHeight: 28,
      content: "{name}\n{percentage}",
    },
    statistic: null,
    // statistic: {
    //   title: {
    //     offsetY: -4,
    //     customHtml: function customHtml(container, view, datum) {
    //       var _container$getBoundin = container.getBoundingClientRect(),
    //         width = _container$getBoundin.width,
    //         height = _container$getBoundin.height;
    //       var d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
    //       var text = datum ? datum.type : "总计";
    //       return renderStatistic(d, text, { fontSize: 28 });
    //     },
    //   },
    //   content: {
    //     offsetY: 4,
    //     style: { fontSize: "32px" },
    //     customHtml: function customHtml(container, view, datum, data) {
    //       var _container$getBoundin2 = container.getBoundingClientRect(),
    //         width = _container$getBoundin2.width;
    //       var text = datum
    //         ? "\xA5 ".concat(datum.value)
    //         : "\xA5 ".concat(
    //             data.reduce(function (r, d) {
    //               return r + d.value;
    //             }, 0)
    //           );
    //       return renderStatistic(width, text, { fontSize: 32 });
    //     },
    //   },
    // },
    // interactions: [
    //   { type: "element-selected" },
    //   { type: "element-active" },
    //   {
    //     type: "pie-statistic-active",
    //     cfg: {
    //       start: [
    //         { trigger: "element:mouseenter", action: "pie-statistic:change" },
    //         {
    //           trigger: "legend-item:mouseenter",
    //           action: "pie-statistic:change",
    //         },
    //         { trigger: "element:mouseleave", action: "pie-statistic:reset" },
    //         {
    //           trigger: "legend-item:mouseleave",
    //           action: "pie-statistic:reset",
    //         },
    //       ],
    //     },
    //   },
    // ],
  };
  return <Pie {...config} />;
};
