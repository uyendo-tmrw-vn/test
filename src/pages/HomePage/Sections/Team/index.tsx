import React, { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import JDang from "assets/img/team/jonny-dang.png";
import LNguyen from "assets/img/team/lan-nguyen.png";
import NPham from "assets/img/team/ngoc-pham.png";
import NHo from "assets/img/team/nhan-ho.png";
import THo from "assets/img/team/tony-ho.png";
import DNguyen from "assets/img/team/daniel-nguyen.png";
import HNguyen from "assets/img/team/hanna-nguyen.png";
import ADang from "assets/img/team/alice-dang.png";
import PNguyen from "assets/img/team/phuc-nguyen.png";
import ASH from "assets/img/team/ash-wsb.png";
import LL from "assets/img/team/lim-lester.png";

import TeamBtnImg from "assets/img/button/team-button.png";
import Advisor from "assets/img/button/our-advisor.png";

import BTitle from "assets/img/media-press/title.png";
import DJ from "assets/img/media-press/dj.png";
import BP from "assets/img/media-press/bp.png";
import CD from "assets/img/media-press/cd.png";
import CK from "assets/img/media-press/ck.png";
import CM from "assets/img/media-press/cm.png";
import IC from "assets/img/media-press/ic.png";
import MW from "assets/img/media-press/mw.png";
import { useSelector } from "react-redux";

interface Props { }
interface TeamInterface {
  avatar: string;
  name: string;
  pos: string;
  description: string;
}
const TeamItem = (Item: TeamInterface) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center px-2">
      <div>
        <img className="team-avatar" src={Item.avatar} alt="avatar" />
      </div>
      <div>
        <h6 className="color-white">{Item.name}</h6>
      </div>
      <p className="text-description-item">{Item.pos}</p>
      <div>
        <h6 className="text-small-1 color-white">{Item.description}</h6>
      </div>
    </div>
  );
};
export default function Team({ }: Props): ReactElement {
  const cmsData = useSelector((state) => state.cmsSlice.cmsData);

  var carouselSetting = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 5,
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
  var carouselInvestorSetting = {
    dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,

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
    <div className="section section-team">
      <div className="container" style={{ zIndex: 3, position: "relative" }}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="imgBtn my-3">
            <img
              className="imgBtn-btn"
              src={TeamBtnImg}
              alt="character-system"
            />
          </div>
          <div
            className="col-12 my-5"
            data-aos="fade-left"
            data-aos-duration="650"
          >
            <Slider {...carouselSetting}>
              <TeamItem
                avatar={JDang}
                name="Jonny Dang"
                pos="Founder/CEO"
                description="He has more than 10 years marketing and business growth technology startup at ASEAN market."
              />
              <TeamItem
                avatar={NPham}
                name="Ngoc Pham"
                pos="CTO"
                description="He has more than 15 years in gaming industry. Former Game Product Manager at VNG."
              />
              <TeamItem
                avatar={NHo}
                name="Nhan Ho"
                pos="Game Developer"
                description="He has more than 8 years in developing game by unity & HTML5."
              />
              <TeamItem
                avatar={LNguyen}
                name="Lan Nguyen"
                pos="Senior Blockchain Developer"
                description="He has more than 5 years in Senior Backend Developer and work with blockchain technology from 2017."
              />
              <TeamItem
                avatar={THo}
                name="Tony Ho"
                pos="Community Manager"
                description="He has 5 years to make community in a lot of gaming and crypto project in Philippines, Indonesia and Vietnam."
              />
              <TeamItem
                avatar={DNguyen}
                name="Daniel Nguyen"
                pos="COO"
                description="He has more than 8 years in technology company in ASEAN and Singapore."
              />
              <TeamItem
                avatar={HNguyen}
                name="Hanna Nguyen"
                pos="Game Artist Designer"
                description=" She has 4 years experience in design game art. Graduated FPT Arena University."
              />
              <TeamItem
                avatar={ADang}
                name="Alice Dang"
                pos="Graphic Designer"
                description="She has 3 years in graphic designer. Over 10 project with social media design role."
              />
            </Slider>
          </div>

          <div className="imgBtn my-5">
            <img className="imgBtn-btn" src={Advisor} alt="our advisor" />
          </div>
          <div
            className="col-12 my-5"
            data-aos="fade-left"
            data-aos-duration="650"
          >
            <Slider {...carouselInvestorSetting}>
              <TeamItem
                avatar={PNguyen}
                name="Phuc Nguyen"
                pos="Founder/CEO of Bunicorn"
                description="Bunicorn is an intense DEFI Game platform that elevates DEFI and blockchain gaming experience to the next level."
              />
              <TeamItem
                avatar={ASH}
                name="Ash WSB"
                pos=""
                description="Ash WSB is a well-known social personality and entrepreneur in the cryptospace since 2015. He has a unique combination of experience in tech startups, design, unified marketing efforts and proven background of success in the blockchain space and beyond."
              />
              <TeamItem
                avatar={LL}
                name="Lim Lester"
                pos="Founder of X21 Digital"
                description="X21 Digital is a Blockchain Advisory and Investment firm dedicated to helping mainly blockchain startups accelerate their growth and exposure in the industry."
              />
            </Slider>
          </div>

          <div className="imgBtn mt-4">
            <img className="imgBtn-btn" src={BTitle} alt="MediaPress" />
          </div>
          <div className="col-12 my-5 px-md-5 px-2">
            <div className="row d-flex justify-content-center">
              {cmsData?.data?.attributes?.mediaPress?.map((obj, index) => (
                <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex" key={index}>
                  <a href={obj.url} target="_blank" rel="noreferrer">
                    <img
                      className="imgBtn-btn-partner"
                      src={`https://cms.heroarena.app${obj.logo.data.attributes.url}`}
                      alt={obj.name}
                    />
                  </a>
                </div>
              ))}
              {/* <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <a
                  href="https://cryptomode.com/hero-arena-nfts-game-world-with-over-20000-heroes-will-officially-igo-on-seedify-and-ieo-on-gate-io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="imgBtn-btn-partner" src={CM} alt="CM" />
                </a>
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <a
                  href="https://www.cryptoknowmics.com/news/hero-arena-the-play-to-earn-blockchain-game-giving-users-another-source-of-income"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="imgBtn-btn-partner" src={CK} alt="CK" />
                </a>
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <a
                  href="https://cryptodaily.io/hero-arena-play-to-earn-metaverse-rpg-game-on-binance-smart-chain-for-dota-lovers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="imgBtn-btn-partner" src={CD} alt="CD" />
                </a>
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <a
                  href="https://www.investing.com/news/cryptocurrency-news/hero-arena-nfts-game-world-with-over-20000-heroes-will-officially-igo-on-seedify-and-ieo-on-gateio-2652045"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="imgBtn-btn-partner" src={IC} alt="IC" />
                </a>
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <a
                  href="https://btcpeers.com/hero-arena-nfts-game-world-with-over-20-000-heroes-will-officially-igo-on-seedify-and-ieo-on-gate-io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="imgBtn-btn-partner" src={BP} alt="BP" />
                </a>
              </div>
              <div className="imgBtn py-3 col-md-3 justify-content-center align-items-center d-flex">
                <a
                  href="https://www.marketwatch.com/press-release/official-hero-arena-igo-on-seedify-on-october-20-and-ieo-on-gateio-on-october-21-2021-10-19"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="imgBtn-btn-partner" src={MW} alt="MW" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
