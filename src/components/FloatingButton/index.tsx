// @ts-nocheck

import React, { ReactElement, useState } from "react";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from "react-floating-button-menu";
import MdAdd from "@material-ui/icons/Add";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MdClose from "@material-ui/icons/Clear";

interface Props { }

export default function FloatingButton({ }: Props): ReactElement {
  const [isOpenFloating, setIsOpenFloating] = useState(true);

  return (
    <div className="floating-button">
      <FloatingMenu
        slideSpeed={500}
        direction="up"
        spacing={15}
        isOpen={isOpenFloating}
      >
        <MainButton
          iconResting={<MdAdd style={{ fontSize: 20 }} nativecolor="white" />}
          iconActive={<MdClose style={{ fontSize: 20 }} nativecolor="white" />}
          background="black"
          onClick={() => setIsOpenFloating(!isOpenFloating)}
          size={30}
        />
        <ChildButton
          icon={
            <TwitterIcon
              style={{ fontSize: 20, color: "#49A1EB" }}
              nativecolor="black"
            />
          }
          background="white"
          size={55}
          onClick={() =>
            window.open("https://twitter.com/HeroArena_Hera", "_blank")
          }
        />
        <ChildButton
          icon={
            <TelegramIcon
              style={{ fontSize: 20, color: "#fff" }}
              nativecolor="black"
            />
          }
          background="#49A1EB"
          size={55}
          onClick={() => window.open("https://t.me/heroarenagame", "_blank")}
        />
      </FloatingMenu>
    </div>
  );
}
