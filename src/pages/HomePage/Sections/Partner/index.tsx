import React, { ReactElement } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BinanceBtn from "assets/img/button/binance-logo.png";
import PolygonBtn from "assets/img/button/polygon-logo.png";

import PartnerBtn from "assets/img/button/partner.png";
import Investor from "assets/img/button/investor.png";

// partner logo
import EstudioLogo from "assets/img/partner-logo/estudio-logo.png";
import MangaPlayLogo from "assets/img/partner-logo/manga-play-logo.png";
import VieAutoLogo from "assets/img/partner-logo/vieauto-logo.png";
import OgameLogo from "assets/img/partner-logo/ogame-logo.png";
import TokenplayLogo from "assets/img/partner-logo/tokenplay-logo.png";
import AivoLogo from "assets/img/partner-logo/aivo-logo.png";
import GoogameLogo from "assets/img/partner-logo/googame-logo.png";
import GosuLogo from "assets/img/partner-logo/gosu-logo.png";
import VeriChains from "assets/img/partner-logo/verichains-logo.png";
import CMC from "assets/img/partner-logo/coinmarketcap-logo.png";
import BSCDaily from "assets/img/partner-logo/bsc-daily.png";
import Seedify from "assets/img/partner-logo/seedify.png";
import Mexc from "assets/img/partner-logo/mexc.png";
import Refinable from "assets/img/partner-logo/refinable.png";
import Babylons from "assets/img/partner-logo/babylons.png";
import GGG from "assets/img/partner-logo/ggg.png";
import Ludena from "assets/img/partner-logo/ludena.png";
import MonstersClan from "assets/img/partner-logo/monster-clans.png";

import BunicornBtn from "assets/img/button/bunicorn-logo.png";
import EverseBtn from "assets/img/button/everse-capital-logo.png";
import x21Btn from "assets/img/button/x21-logo.png";
import MintedLab from "assets/img/button/minted-lab.png";
import DCI from "assets/img/button/dci.png";
import AC from "assets/img/button/ac.png";
import BC from "assets/img/button/bc.png";
import HG from "assets/img/button/hg.png";
import EX from "assets/img/button/ex.png";
import MC from "assets/img/button/mc.png";
import MGC from "assets/img/button/mgc.png";
import FL from "assets/img/button/fl.png";
import CHR from "assets/img/button/chr.png";
import GateIO from "assets/img/button/gateio.png";
import PV from "assets/img/button/pv.png";
import TH from "assets/img/button/th.png";
import { useSelector } from "react-redux";

interface Props { }

export default function Partner({ }: Props): ReactElement {
  const popupData = useSelector((state) => state.cmsSlice.cmsData);

  var carouselSetting = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section section-partner">
      <div className="container">
        <div className="col-12 py-3 text-center d-flex flex-column justify-content-center align-items-center">
          <h6 data-aos="fade-in text-description" className="color-white">
            Main Blockchain Technology of Hero Arena Binance Smart Chain &
            Polygon
          </h6>
          <div className="row d-flex justify-content-center py-5">
            <div className="imgBtn col-lg-6" data-aos="fade-in">
              <img
                className="imgBtn-btn-partner"
                src={BinanceBtn}
                alt="binance"
              />
            </div>
            <div className="imgBtn col-lg-6 mt-3 mt-lg-0" data-aos="fade-in">
              <img
                className="imgBtn-btn-partner"
                src={PolygonBtn}
                alt="polygon"
              />
            </div>
          </div>
          <div className="imgBtn my-3">
            <img className="imgBtn-btn" src={PartnerBtn} alt="partner" />
          </div>
          <div className="partner-board" data-aos="fade-in">
            <div className="col-12">
              <div className="row">
                {popupData?.data?.attributes?.partners?.map((img, index) => (
                  <div className="col-md-3 d-flex align-items-center justify-content-center" key={index}>
                    <img
                      className="partner-board-item"
                      src={`https://cms.heroarena.app${img?.logo?.data?.attributes?.url}`}
                      alt={img.name}
                    />
                  </div>
                ))}
                {/* <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img
                    className="partner-board-item"
                    src={EstudioLogo}
                    alt="logo"
                  />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img
                    className="partner-board-item"
                    src={BSCDaily}
                    alt="logo"
                  />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img
                    className="partner-board-item"
                    src={VeriChains}
                    alt="logo"
                  />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img
                    className="partner-board-item p-4"
                    src={TokenplayLogo}
                    alt="logo"
                  />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img className="partner-board-item" src={CMC} alt="logo" />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img
                    className="partner-board-item"
                    src={Seedify}
                    alt="logo"
                  />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img className="partner-board-item" src={Mexc} alt="logo" />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img
                    className="partner-board-item"
                    src={Refinable}
                    alt="logo"
                  />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img
                    className="partner-board-item"
                    src={Babylons}
                    alt="logo"
                  />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img className="partner-board-item" src={GGG} alt="logo" />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img className="partner-board-item" src={Ludena} alt="logo" />
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img
                    className="partner-board-item"
                    src={MonstersClan}
                    alt="logo"
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="imgBtn mt-4">
            <img className="imgBtn-btn" src={Investor} alt="investor" />
          </div>
          <div className="col-12 my-5 px-md-5 px-2">
            <div className="row d-flex justify-content-center">
              {/* <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img
                  className="imgBtn-btn-partner"
                  src={BunicornBtn}
                  alt="bunicorn"
                />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex ">
                <img
                  className="imgBtn-btn-partner"
                  src={EverseBtn}
                  alt="erverse-capital"
                />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={x21Btn} alt="x21" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img
                  className="imgBtn-btn-partner"
                  src={MintedLab}
                  alt="Minted Lab"
                />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={DCI} alt="DCI" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={AC} alt="AC" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={BC} alt="BC" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={HG} alt="HG" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={EX} alt="EX" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={MC} alt="MC" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={MGC} alt="MGC" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={FL} alt="FL" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={CHR} alt="CHR" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={GateIO} alt="GateIO" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={PV} alt="PV" />
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <img className="imgBtn-btn-partner" src={TH} alt="TH" />
              </div> */}
              {popupData?.data?.attributes?.investors?.map((img, index) => (
                <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex" key={index}>
                  <img
                    className="imgBtn-btn-partner"
                    src={`https://cms.heroarena.app${img?.logo?.data?.attributes?.url}`}
                    alt={img?.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
