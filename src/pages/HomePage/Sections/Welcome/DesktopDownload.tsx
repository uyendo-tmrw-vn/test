import React, { ReactElement } from "react";

import HeroArenaImg from "assets/img/text/hero-arena.png";
import WelcomeToImg from "assets/img/text/welcome-to.png";

import AppStoreImg from "assets/img/download/appstore.png";
import CHPlayImg from "assets/img/download/ch-play.png";
import WebImg from "assets/img/download/web.png";
interface Props {}

export default function DesktopDownload({}: Props): ReactElement {
  return (
    <>
      <div className="d-flex flex-column justify-content-between align-items-center">
        <img className="download-item" src={AppStoreImg} alt="Apple Store" />
        <a className="ha-button download-button" href="#">
          COMING SOON
        </a>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center">
        <img className="download-item" src={CHPlayImg} alt="Apple Store" />
        <a className="ha-button download-button" href="#">
          COMING SOON
        </a>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center">
        <img className="download-item" src={WebImg} alt="Apple Store" />
        <a className="ha-button download-button" href="#">
          COMING SOON
        </a>
      </div>
    </>
  );
}
