import React, { ReactElement, useEffect } from "react";
import LogoImg from "assets/img/logo-footer.png";
import {
  SendOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setCheckBottom } from "redux/slices/counter";

import discord from "assets/img/icons/discord.png";

interface Props {}

export default function Footer({}: Props): ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCheckBottom(1));
  }, []);
  return (
    <div>
      <div className="section section-footer">
        <div className="container p-3 p-md-5">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column">
                <div className="py-3">
                  <img
                    className="logo-footer"
                    src={LogoImg}
                    alt="HeroArena Logo"
                  />
                </div>
                {/* <h6 className="color-white">
                  Hero Arena is a project of TECHFARM PTE. LTD.
                </h6>
                <br />
                <h6 className="color-grey">Registration No: 201823926Z</h6>
                <h6 className="color-grey">
                  Registered Office: 160 ROBINSON ROAD #26-10 SPORE BUSINESS
                  FEDERATION CTR SINGAPORE (068914)
                </h6> */}
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="yellow-brighter-text">About Us</h5>
              <br />
              <h6 className="color-white">Download</h6>
              <h6 className="color-white">Play Game</h6>
              <a
                href="https://nft.heroarena.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h6 className="color-white">NFT Market</h6>
              </a>
              <h6 className="color-white">HERA Token</h6>
              <h6 className="color-white">Tokenomic</h6>
              <h6 className="color-white">Staking</h6>
              <h6 className="color-white">Inventory</h6>
              <a
                href="https://drive.google.com/file/d/16eXKY3dCSFTLzee5AiwfLfCkBqE2cb9t/view"
                target="_blank"
                rel="noreferrer"
              >
                <h6 className="color-white">Contract Audit</h6>
              </a>
              <a
                href="https://docs.heroarena.app/document/term-and-policy/policy"
                target="_blank"
                rel="noreferrer"
              >
                <h6 className="color-white">Policy</h6>
              </a>
              <a
                href="https://docs.heroarena.app/document/term-and-policy/terms-of-use"
                target="_blank"
                rel="noreferrer"
              >
                <h6 className="color-white">Terms of Use</h6>
              </a>
            </div>
            <div className="col-md-4">
              <h5 className="yellow-brighter-text">JOIN NEWSLETTER</h5>
              <br />
              <h6 className="py-2 color-white">
                Subscribe our newsletter to get more free design course and
                resource
              </h6>
              <div className="d-flex ha-input justify-content-between">
                <input placeholder="Enter your email" />
                <div className="submit-email">
                  <SendOutlined />
                </div>
              </div>
              <div className="d-flex py-3 justify-content-around">
                <a
                  href="https://twitter.com/HeroArena_Hera"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-circle">
                    <TwitterOutlined />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/HeroArena.Hera"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-circle">
                    <FacebookOutlined />
                  </div>
                </a>
                <a
                  href="https://t.me/heroarenagame"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-circle">
                    <SendOutlined />
                  </div>
                </a>
                <a
                  href="https://heroarena.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-circle">
                    <MediumOutlined />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCkYvwWzFreokzowE8lO5f4A"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-circle">
                    <YoutubeOutlined />
                  </div>
                </a>
                <a
                  href="https://discord.com/invite/wzWJrhDkHQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-circle">
                    <img src={discord} className="icon-footer" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © 2021 Hero Arena. All rights reserved
      </div>
    </div>
  );
}
