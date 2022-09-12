import useFetchHeraVal from "hooks/useFetchHeraPrice";
import React, { ReactElement } from "react";

import GateIO from "assets/img/icons/gate-io.png";
import ZtGlobal from "assets/img/icons/zt-global.png";
import Pks from "assets/img/icons/pks.png";
import Bunni from "assets/img/icons/bunni.png";
import { useSelector } from "react-redux";

interface Props {}

export default function HeraPrice({}: Props): ReactElement {
  const heraValue = useFetchHeraVal();
  const cmsData = useSelector((state) => state.cmsSlice.cmsData);

  return (
    <div className="hera-price-mobile d-flex flex-column justify-content-between align-items-center py-3">
      <div className="hera-price mb-1">HERA Price - ${heraValue.heraPrice}</div>
      <div className="col-12">
        <div className="row d-flex justify-content-center">
          {cmsData?.data?.attributes?.exchangeInformation?.map((obj, index) => (
            <div className="col-6">
              <div className="d-flex align-items-center provider-block">
                <div className="provider d-flex flex-column justify-content-center align-items-center">
                  <img
                    src={`https://cms.heroarena.app${obj.logo.data.attributes.url}`}
                    className="icon"
                    alt=""
                  />
                  <div>{obj.name}</div>
                </div>
                <a href={obj.url} target="_blank" rel="noreferrer">
                  <div className="ml-2 buy-hera">Buy HERA</div>
                </a>
              </div>
            </div>
          ))}

          {/* <div className="col-6">
            <div className="d-flex align-items-center provider-block ">
              <div className="provider d-flex flex-column justify-content-center align-items-center">
                <img src={ZtGlobal} className="icon" alt="" />
                <div>ZT Global</div>
              </div>
              <a
                href="https://www.ztb.im/exchange?coin=HERA_USDT"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-2 buy-hera">Buy HERA</div>
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center provider-block">
              <div className="provider d-flex flex-column justify-content-center align-items-center">
                <img src={Pks} className="icon" alt="" />
                <div>Pancakeswap</div>
              </div>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x49c7295ff86eabf5bf58c6ebc858db4805738c01"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-2 buy-hera">Buy HERA</div>
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center provider-block">
              <div className="provider d-flex flex-column justify-content-center align-items-center">
                <img src={Bunni} className="icon" alt="" />
                <div>Bunicorn</div>
              </div>
              <a
                href="https://bunicorn.exchange/#/hero-arena-farms"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ml-2 buy-hera">Buy HERA</div>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
