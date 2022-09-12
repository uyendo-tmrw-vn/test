import React, { ReactElement, useEffect } from "react";
import FeaturesBtnImg from "assets/img/button/nft-items.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";
import HeroCard from "components/HeroCard";
interface Props {}
interface IFeatureItem {
  icon: string;
  title: string;
  content: string;
  largeSize?: boolean;
}
const FeatureItem = (Item: IFeatureItem) => {
  return (
    <div
      className="d-flex justify-content-center"
      data-aos="slide-up"
      data-aos-offset="50"
    >
      <div
        className={`${Item.largeSize ? "feature-item-large" : "feature-item"}`}
      >
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          {Item.icon ? (
            <div>
              <img className="feature-item-icon" src={Item.icon} alt="icon" />
            </div>
          ) : (
            <div></div>
          )}
          <div>
            <h5 className="yellow-text feature-title">{Item.title}</h5>
          </div>
          <div>
            <h6 className="text-description-item feature-description color-white">
              {Item.content}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Feature({}: Props): ReactElement {
  var carouselSetting = {
    dots: true,
    infinite: true,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2200,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div className="section section-nft-items">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          {/* features btn */}
          <div className="imgBtn my-3">
            <img
              className="imgBtn-btn"
              src={FeaturesBtnImg}
              alt="character-system"
            />
          </div>
          {/* <h6
            className="my-4 text-center text-description color-white"
            // data-aos="fade"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h6> */}
          {/* table content */}
          <div className="container px-4 px-md-2 col-12">
            {/* <div className="row d-flex justify-content-center align-items-center"> */}
            <Slider {...carouselSetting}>
              <div className="p-2">
                <HeroCard
                  cardName="Lonely Swordsman"
                  itemName="#111111001"
                  rarity="COMMON"
                  videoUrl={`/assets/anim/hero-card/Common-Beast-1-Warrior-Lonely-Swordsman.mp4`}
                  itemPrice="200"
                  race="beast"
                />
              </div>
              <div className="p-2">
                <HeroCard
                  cardName="Fire Sniper"
                  itemName="#214211031"
                  rarity="COMMON"
                  videoUrl={`/assets/anim/hero-card/Common-Warlord-4-Archer-Fire-Sniper.mp4`}
                  itemPrice="200"
                  race="warlord"
                />
              </div>
              <div className="p-2">
                <HeroCard
                  cardName="Mirnana"
                  itemName="#311144030"
                  rarity="LEGENDARY"
                  videoUrl={`/assets/anim/hero-card/Legendary-Elf-1-Warrior-Mirnana.mp4`}
                  itemPrice="200"
                  race="elf"
                />
              </div>
              <div className="p-2">
                <HeroCard
                  cardName="Red Orc"
                  itemName="#413111163"
                  rarity="COMMON"
                  videoUrl={`/assets/anim/hero-card/Common-Orc-3-Warrior-Red-Orc.mp4`}
                  itemPrice="200"
                  race="orc"
                />
              </div>
              <div className="p-2">
                <HeroCard
                  cardName="Skeleton Sage"
                  itemName="#517333005"
                  rarity="ELITE"
                  videoUrl={`/assets/anim/hero-card/Elite-Undead-7-Mage-Skeleton-Sage.mp4`}
                  itemPrice="200"
                  race="undead"
                />
              </div>
              <div className="p-2">
                <HeroCard
                  cardName="Yurnero"
                  itemName="#412122088"
                  rarity="RARE"
                  videoUrl={`/assets/anim/hero-card/Rare-Orc-2-Warrior-Yurnero.mp4`}
                  itemPrice="200"
                  race="orc"
                />
              </div>
              <div className="p-2">
                <HeroCard
                  cardName="Coo"
                  itemName="#117322132"
                  rarity="RARE"
                  videoUrl={`/assets/anim/hero-card/Rare-Beast-7-Mage-Coo.mp4`}
                  itemPrice="200"
                  race="beast"
                />
              </div>
              <div className="p-2">
                <HeroCard
                  cardName="Dead Knight"
                  itemName="#412122088"
                  rarity="IMMORTAL"
                  videoUrl={`/assets/anim/hero-card/Immortal-Warlord-3-Warrior-Dead-Knight.mp4`}
                  itemPrice="200"
                  race="warlord"
                />
              </div>
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
