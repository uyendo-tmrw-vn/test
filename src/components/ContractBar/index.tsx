import React, { ReactElement } from "react";
import TeleIcon from "assets/img/icons/telegram-icon.png";
import TwitterIcon from "assets/img/icons/twitter-icon.png";
import CloseIcon from "assets/img/icons/close-icon.png";

import { useDispatch, useSelector } from "react-redux";
import { setShowingContractBar } from "redux/slices/counter";
interface Props {}

export default function ContractBar({}: Props): ReactElement {
  const dispatch = useDispatch();
  const isShowingContractBar = useSelector(
    (state) => state.counter.isShowingContractBar
  );

  return (
    <>
      {isShowingContractBar ? (
        <div className="contract-bar align-items-center justify-content-center d-flex">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="contract-bar-container">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-8 col-12 contract-bar-item text-center">
                    <a
                      href="https://bscscan.com/token/0x49c7295ff86eabf5bf58c6ebc858db4805738c01"
                      rel="noreferrer"
                      target="_blank"
                    >
                      HERA Contract Address:
                      0x49c7295ff86eabf5bf58c6ebc858db4805738c01
                    </a>
                  </div>
                  <div className="col-lg-4 col-12 d-flex justify-content-center justify-content-lg-between align-items-center">
                    <div className="pr-lg-0 pr-2">
                      <a
                        href="https://t.me/heroarenagame"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          src={TeleIcon}
                          className="contract-bar-social-icon"
                          alt="hera telegram"
                        />
                        &nbsp;@heroarenagame
                      </a>
                    </div>
                    <div className="">
                      <a
                        href="https://twitter.com/HeroArena_Hera"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          src={TwitterIcon}
                          className="contract-bar-social-icon"
                          alt="hera twitter"
                        />
                        &nbsp;@HeroArena_Hera
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="contract-bar-close"
              onClick={() => dispatch(setShowingContractBar(false))}
            >
              <img src={CloseIcon} width="23px" alt="close btn" />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
