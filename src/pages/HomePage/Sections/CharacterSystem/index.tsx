import React, { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Char2 from "assets/img/character/2.png";
import Char3 from "assets/img/character/3.png";
import Char4 from "assets/img/character/4.png";

// import MageDock from "assets/img/character-system/mage-dock.png";
// import WarriorDock from "assets/img/character-system/warrior-dock.png";
// import ArcherDock from "assets/img/character-system/archer-dock.png";

import Warlord from "assets/img/character-system/new-req/warlord.png";
import Elf from "assets/img/character-system/new-req/elf.png";
import Orc from "assets/img/character-system/new-req/orc.png";
import Beast from "assets/img/character-system/new-req/beast.png";
import Undead from "assets/img/character-system/new-req/undead.png";

// import Beast from "assets/img/character-system/beast.png";
// import Elf from "assets/img/character-system/elf.png";
// import Orc from "assets/img/character-system/orc.png";
// import Undead from "assets/img/character-system/undead.png";
// import Warlord from "assets/img/character-system/warlord.png";

import CharacterSystemImg from "assets/img/button/character-system.png";
interface Props {}

export default function CharacterSystem({}: Props): ReactElement {
  var carouselSetting = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  interface CharacterInterface {
    name: string;
    image: string;
    posEndOnMobile: boolean;
  }
  const CharacterItem = (Item: CharacterInterface) => {
    return (
      <div
        className={`col-md-4 col-12 d-flex character-item flex-column ${
          Item.posEndOnMobile ? "align-items-end" : "align-items-start"
        } align-items-md-center justify-content-center`}
      >
        <div className="ha-button">{Item.name}</div>
        <div>
          <img
            src={Item.image}
            className="character-item-image"
            alt="character-1"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="section section-character-system">
      <div className="container" style={{ zIndex: 3, position: "relative" }}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {/* character system btn */}
          <div className="imgBtn my-3">
            <img
              className="imgBtn-btn"
              src={CharacterSystemImg}
              alt="character-system"
            />
          </div>
          {/* description */}
          <h6 className="my-2 my-md-5 text-center text-description color-white">
            UNIQUE 20.000 Heroes in game of 5 races: Warlord, Orc, Elf, Undead,
            Beast
          </h6>
          {/* slider */}
          <div
            className="col-12 character-row-wrapper"
            data-aos="fade-in"
            data-aos-delay="250"
            data-aos-duration="650"
          >
            <div className="row d-flex justify-content-center character-row-top">
              <CharacterItem
                name="Warlord"
                image={Warlord}
                posEndOnMobile={true}
              />
              <CharacterItem name="ORC" image={Orc} posEndOnMobile={false} />
            </div>
            <div className="row d-flex justify-content-center character-row-bottom">
              <CharacterItem name="ELF" image={Elf} posEndOnMobile={false} />
              <CharacterItem
                name="Undead"
                image={Undead}
                posEndOnMobile={true}
              />
              <CharacterItem
                name="Beast"
                image={Beast}
                posEndOnMobile={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <Slider {...carouselSetting}>
              <div className="d-flex flex-column carousel-character align-items-center justify-content-center">
                <div className="ha-button">MAGE</div>
                <div>
                  <img
                    src={MageDock}
                    className="carousel-character-img con-vua"
                    alt="character-1"
                  />
                </div>
              </div>
              <div className="d-flex flex-column carousel-character align-items-center justify-content-center">
                <div className="ha-button">WARRIOR</div>
                <div>
                  <img
                    src={WarriorDock}
                    className="carousel-character-img"
                    alt="character-1"
                  />
                </div>
              </div>
              <div className="d-flex flex-column carousel-character align-items-center justify-content-center">
                <div className="ha-button">ARCHER</div>
                <div>
                  <img
                    src={ArcherDock}
                    className="carousel-character-img"
                    alt="character-1"
                  />
                </div>
              </div>
            </Slider> */
}
