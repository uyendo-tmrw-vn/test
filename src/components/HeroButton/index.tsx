import React, { ReactElement, useEffect, useRef, useState } from "react";
interface IHeroButton {
  type: "yellow" | "gray";
  text: string;
  externalClass?: string;
}
export default function HeroButton({ type, text, externalClass }: IHeroButton) {
  const textRef = useRef<any>();
  const [textWidth, setTextWidth] = useState(100);
  const [textHeight, setTextHeight] = useState(45);

  const ReturnImgBg = () => {
    switch (type) {
      case "gray": {
        return "/assets/img/buttons/button-gray.png";
      }
      default:
      case "yellow": {
        return "/assets/img/buttons/button-yellow.png";
      }
    }
  };

  useEffect(() => {
    setTextWidth(textRef.current.offsetWidth + 65);
    setTextHeight(textRef.current.offsetHeight + 20);
    // console.log(textRef.current);
  }, [textRef.current?.value]);

  return (
    <div className="herobutton">
      <div className="herobutton--text" ref={textRef}>
        {text}
      </div>
      <img
        src={ReturnImgBg()}
        className={externalClass}
        // style={{ height: textHeight }}
      />
    </div>
  );
}
