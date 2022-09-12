import React, { ReactElement } from "react";
import TokenAllocation from "./TokenAllocation";
import TokenDistribution from "./TokenDistribution";
import { MetricData } from "./MetricData";
import { useMediaQuery } from "react-responsive";

interface Props { }
interface ILegendItem {
  className: string;
  type: string;
  name: string;
}
const LegendItem = (Item: ILegendItem) => {
  return (
    <div
      className="d-flex align-items-center mb-3"
      data-aos="fade-left"
      data-aos-offset="20"
    >
      <div className={`${Item.className} label-legend`}>{Item.type}</div>
      <div className="ml-3 w-50">{Item.name}</div>
    </div>
  );
};
export default function TokenMetric({ }: Props): ReactElement {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <div className="section section-metric">
      <div className="container">
        <div className="col-12">
          <div className="row">
            <div className="col-lg-6 p-lg-3 p-0" data-aos="fade-right">
              <div className="text-center">
                <h3 className="color-white">Token Allocation</h3>
                {/* <TokenAllocation /> */}
              </div>
            </div>
            <div className="col-lg-6 p-lg-3 p-0" data-aos="fade-left">
              <div className="text-center">
                <h3 className="color-white">Token Distribution</h3>
                <TokenDistribution />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-lg-8 p-lg-2 p-0">
              <div className="text-left my-4">
                <h3 className="color-white">TOKEN METRIC</h3>
              </div>
              <table className="table-economy">
                {isDesktop && (
                  <colgroup>
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "5%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "75%" }} />
                  </colgroup>
                )}
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Percentage</th>
                    <th>Amount Token</th>
                    <th>Vesting Period</th>
                  </tr>
                </thead>
                <tbody>
                  {MetricData.map((e, i) => {
                    return (
                      <tr
                        key={i}
                        data-aos="fade-down"
                        data-aos-delay="150"
                        data-aos-offset="20"
                      >
                        <td>
                          <b style={{ fontWeight: "bold" }}>{e.stage}</b>
                        </td>
                        <td>{e.percentage}%</td>
                        <td>{e.amount}</td>
                        <td style={{ textAlign: "left" }}>{e.vesting}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot
                  data-aos="fade-up"
                  data-aos-delay="250"
                  data-aos-offset="20"
                >
                  <tr>
                    <th>Total</th>
                    <th>100%</th>
                    <th>100,000,000</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="col-lg-4 p-2">
              <div className="text-left my-2 my-lg-4">
                <h3 style={{ visibility: "hidden" }}>TOKEN</h3>
              </div>
              <div className="table-legend p-3">
                <LegendItem
                  className="lb-name"
                  type="Token Name"
                  name="Hera Token"
                />
                <LegendItem className="lb-symbol" type="Symbol" name="HERA" />
                <LegendItem className="lb-type" type="Type" name="BEP-20" />
                <LegendItem
                  className="lb-supply"
                  type="Total Supply"
                  name="100,000,000"
                />
                <LegendItem
                  className="lb-public"
                  type="Public Sale"
                  name="0,1$"
                />
                <LegendItem
                  className="lb-market"
                  type="Initial market cap"
                  name="445,000$"
                />
                <LegendItem
                  type="Initial circulating supply"
                  className="lb-circular-supply"
                  name="4,450,000 HERA (included liquidity tokens)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
