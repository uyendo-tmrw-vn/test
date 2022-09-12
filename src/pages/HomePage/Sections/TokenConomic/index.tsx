import React, { ReactElement } from "react";
import HeraBtnIcon from "assets/img/button/hera-address.png";
import ExchangeIcon from "assets/img/icons/exchange.png";
import GovernanceIcon from "assets/img/icons/governance.png";
import StakingIcon from "assets/img/icons/staking.png";
import Play2EarnIcon from "assets/img/icons/play2earn.png";

import TokenEcoMobileTitle from "assets/img/text/token-conomic-mobile.png";
interface Props {}
interface TokenConomicItemInterface {
  image: string;
  title: string;
  content: string;
}
const TokenConomicItem = (Item: TokenConomicItemInterface) => {
  return (
    <div
      className="tokenconomic-item d-flex align-items-center"
      data-aos="flip-up"
    >
      <div className="col-12">
        <div className="d-flex">
          <div>
            <img
              className="tokenconomic-item-icon"
              src={Item.image}
              alt="tokenconomic-item-icon"
            />
          </div>
          <div className="d-flex flex-column p-2">
            <div>
              <h6 className="yellow-text text-title">{Item.title}</h6>
            </div>
            <div>
              <h6 className="brown-text text-description-item">
                {Item.content}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function TokenConomic({}: Props): ReactElement {
  return (
    <div className="section section-tokenconomic">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center my-3">
          <img
            src={TokenEcoMobileTitle}
            className="d-block d-lg-none"
            alt="title"
            width="350px"
          />
          <div
            className="tokenconomic-board d-flex flex-column justify-content-center align-items-center"
            data-aos="zoom-in"
            data-aos-duration="420"
          >
            <div>
              <h6 className="brown-text d-inline">
                <span className="yellow-text">HERA Token ($Hera)</span> will be
                the main in-game currency. It will be used to buy items in game,
                trading, exchanging, staking to improve the skill and agility of
                Heroes.
              </h6>
            </div>
            <div className="text-center brown-text my-5">
              <h6>Official Contract address</h6>
              <h6>Network: Binance Smart Chain</h6>
              <h6>Type: BEP-20</h6>
              <h6 className="d-none d-lg-block">
                0x49C7295ff86EaBf5bf58C6eBC858DB4805738c01
              </h6>
              <h6
                className="d-block d-lg-none"
                style={{
                  width: "220px",
                  wordWrap: "break-word",
                  lineHeight: "16px",
                }}
              >
                {`0x49C7295ff86EaBf5bf58C6eBC858DB4805738c01`}
              </h6>
            </div>
            <div>
              <a
                href="https://bscscan.com/token/0x49c7295ff86eabf5bf58c6ebc858db4805738c01"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="hera-button"
                  src={HeraBtnIcon}
                  alt="Hera Address"
                />
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-6 px-lg-2 px-0">
                <TokenConomicItem
                  image={ExchangeIcon}
                  title="EXCHANGE & FARMING"
                  content="Players must use HERA token to buy Heroes in marketplace and get Hera from enermy when they win battle. You can trade on Pancakeswap and Farming on Dex."
                />
              </div>
              <div className="col-lg-6 px-lg-2 px-0">
                <TokenConomicItem
                  image={GovernanceIcon}
                  title="Governance & BURN"
                  content="Vote for new features and setting of the game to earn special rewards. lock HERA tokens for a certain time to again voting power.
                20% of every HERA transaction on HERA NFT Market will be burnt (and reduce Max Supply permanently)."
                />
              </div>
              <div className="col-lg-6 px-lg-2 px-0">
                <TokenConomicItem
                  image={StakingIcon}
                  title="Staking"
                  content="Become part of the game by staking HERA tokens into pools. Staking NFT Character/Item to get more HERA Token and upgrade skill, statistic of item."
                />
              </div>
              <div className="col-lg-6 px-lg-2 px-0">
                <TokenConomicItem
                  image={Play2EarnIcon}
                  title="Play 2 Earn"
                  content="Simply playing can also get you HERA tokens via mission and social mining."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
