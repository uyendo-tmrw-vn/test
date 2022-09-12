import React, { ReactElement } from "react";
import AppStoreImg from "assets/img/download/appstore.png";
import CHPlayImg from "assets/img/download/ch-play.png";
import WebImg from "assets/img/download/web.png";

interface Props {}

export default function MobileDownload({}: Props): ReactElement {
  return (
    <div className="col-12 py-4" style={{ backgroundColor: "#FEEBCC" }}>
      <div className="download row" style={{ zIndex: 5 }}>
        <div className="col-12 py-3 d-flex flex-column justify-content-between align-items-center">
          <img className="download-item" src={AppStoreImg} alt="Apple Store" />
          <a className="ha-button mt-2 download-button" href="#">
            COMING SOON
          </a>
        </div>
        <div className="col-12 py-3 d-flex flex-column justify-content-between align-items-center">
          <img className="download-item" src={CHPlayImg} alt="Apple Store" />
          <a className="ha-button mt-2 download-button" href="#">
            COMING SOON
          </a>
        </div>
        <div className="col-12 py-3 d-flex flex-column justify-content-between align-items-center">
          <img className="download-item" src={WebImg} alt="Apple Store" />
          <a className="ha-button mt-2 download-button" href="#">
            COMING SOON
          </a>
        </div>
      </div>
    </div>
  );
}
