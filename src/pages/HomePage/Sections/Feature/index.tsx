import React, { ReactElement, useEffect } from "react";
import FeaturesBtnImg from "assets/img/button/features.png";

import GoldIcon from "assets/img/icons/gold.png";
import NFTIcon from "assets/img/icons/nft.png";
import AFKIcon from "assets/img/icons/afk.png";
import FreeToPlayIcon from "assets/img/icons/free-to-play.png";
import PvpIcon from "assets/img/icons/pvp.png";
import QuestIcon from "assets/img/icons/quest.png";
import Dungeon from "assets/img/icons/dungeon.png";
import RentToPlay from "assets/img/icons/rent-to-play.png";

import AOS from "aos";
import "aos/dist/aos.css";
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
  //   const initAos = async () => {
  //     document.addEventListener("DOMContentLoaded", function (event) {
  //       AOS.init();
  //       AOS.refresh();
  //       console.log("dom loaded");
  //     });
  //   };
  return (
    <div className="section section-feature">
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
          {/* table content */}
          <div className="col-12 px-lg-5 px-1 py-3">
            <div className="row">
              <div className="col-sm-6">
                <FeatureItem
                  icon={GoldIcon}
                  title="Play to Earn"
                  content="Players action their mission everyday. Training Heroes and earn HERA Token."
                />
              </div>
              <div className="col-sm-6">
                <FeatureItem
                  icon={NFTIcon}
                  title="NFT MARKETPLACE"
                  content="Buy new Heroes by HERA token to expand your collection and sell Heroes to increase earnings."
                />
              </div>
              <div className="col-sm-6">
                <FeatureItem
                  icon={AFKIcon}
                  title="AFK"
                  content="Allows players to gain Gold even you offline. Gold can swap to HERA Token."
                />
              </div>
              <div className="col-sm-6">
                <FeatureItem
                  icon={PvpIcon}
                  title="PVP/PVE"
                  content="Players can assemble a team of three Heroes out of their collection and join real-time turn-based battles against opponents. Leaderboards are included."
                />
              </div>
              <div className="col-sm-6">
                <FeatureItem
                  icon={QuestIcon}
                  title="QUEST"
                  content="User performs daily tasks to earn tokens. Missions include train heroes, fight monsters, and fight generals. After completing the user will receive a token reward."
                />
              </div>
              <div className="col-sm-6">
                <FeatureItem
                  icon={FreeToPlayIcon}
                  title="Free to play"
                  content="Instead of spending money to buy game characters, user can play games for free and get a little reward for complete mission level in game."
                />
              </div>
              <div className="col-sm-6">
                <FeatureItem
                  icon={Dungeon}
                  title="DUNGEON"
                  content="Beat individual bosses in Dungeon 3 times per day (8 hours/time). Depending on the character level, there will be different difficulties. After defeating the boss, you will receive Tokens & items."
                  largeSize={true}
                />
              </div>
              <div className="col-sm-6">
                <FeatureItem
                  icon={RentToPlay}
                  title="Rent to play"
                  content="Rent to play: With rare and high-priced heroes, instead of users having to spend a lot of money to buy this hero, you can go to the marketplace to rent these heroes for a cheaper price for a certain period of time, the owner heroes will earn a profit from renting heroes."
                  largeSize={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
