import React, { ReactElement, useRef, useEffect, useCallback } from "react";
import WelcomeToImg from "assets/img/text/wt-mobile.png";
import CharactersWelcome from "assets/img/character/characters-welcome.png";

import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
interface Props {}

export default function WelcomeMobile({}: Props): ReactElement {
  const heroes = useRef<HTMLImageElement>(null);
  var heroesTimeline = gsap.timeline();
  const initScrollAnimation = useCallback(() => {
    heroesTimeline.to(heroes.current, {
      scale: 1.25,
      //   opacity: 0.5,
      //   filter: "hue-rotate(100deg)",
      // backgroundSize: "100% 100%",
      duration: 200,
    });
    ScrollTrigger.create({
      trigger: ".container-gs",
      animation: heroesTimeline,
      endTrigger: ".about-us",
      // pin: true,
      start: "top",
      end: "top 5%", // beyond start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      //   markers: true,
    });
  }, []);

  useEffect(() => {
    initScrollAnimation();
  }, []);
  return (
    <div className="section section-welcome-mobile">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="wm-layer-wrap">
            <div className="welcome-mobile-layer-characters">
              <img
                ref={heroes}
                className="characters-welcome-img"
                src={CharactersWelcome}
                alt="Chars"
              />
            </div>
            <div className="welcome-mobile-layer-fade-bottom d-flex justify-content-center">
              <img
                className="wt-mobile"
                src={WelcomeToImg}
                alt="Welcome to Hero Arena"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
