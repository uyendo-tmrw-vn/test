import HeroButton from "components/HeroButton";
import React, { ReactElement } from "react";
interface Props {}
interface IItemCard {
  cardName: string;
  itemName: string;
  videoUrl: string;
  rarity: string;
  itemPrice: string;
  race: string;
}

export default function HeroCard({
  cardName,
  itemName,
  videoUrl,
  rarity,
  itemPrice,
  race,
}: IItemCard): ReactElement {
  return (
    <div className="nft-item--card shadow my-3">
      <div className="item-anim--wrapper">
        <div className="item-anim--border">
          <div className="card-border">
            <div className="card-name shadow">{cardName}</div>
          </div>
        </div>
        <video
          autoPlay={true}
          className="video-card"
          controls={false}
          controlsList="nodownload"
          loop={true}
          muted
          playsInline={true}
          poster=""
        >
          <source src={videoUrl} />
        </video>
      </div>
      <div className="col-12 item-info">
        <div className="d-flex justify-content-between align-items-center py-2">
          <div>
            <img className="user-avatar" src="/assets/img/avatars/1.png" />
          </div>
          <div className="item-name">{itemName}</div>
          <div className="item-class" class-type={rarity}>
            {rarity}
          </div>
          <div>
            <img
              className="item-class-img"
              src={`/assets/img/class/${race}.png`}
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center item-price p-1 my-1">
          <div className="d-flex" style={{ padding: "2px" }}>
            {/* <img src="/assets/img/icons/binance.png" width="23px" /> */}
            <span className="ml-2">{itemPrice} HERA</span>
          </div>
        </div>
        <div className="d-flex justify-content-around justify-content-md-between py-2 my-1">
          <div>
            <HeroButton type="gray" text="Detail" />
          </div>
          <HeroButton type="yellow" text="Buy" />
        </div>
      </div>
    </div>
  );
}
