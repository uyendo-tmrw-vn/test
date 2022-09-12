import React, { ReactElement, useCallback, useEffect, useRef } from "react";
import BackgroundImg from "assets/img/section-welcome.jpg";
import HeroArenaImg from "assets/img/text/hero-arena.png";
import WelcomeToImg from "assets/img/text/welcome-to.png";

import Char1 from "assets/img/character/1.png";
import Char2 from "assets/img/character/2.png";
import Char3 from "assets/img/character/3.png";
import Char4 from "assets/img/character/4.png";
import Char5 from "assets/img/character/5.png";
import Char6 from "assets/img/character/6.png";

import AppStoreImg from "assets/img/download/appstore.png";
import CHPlayImg from "assets/img/download/ch-play.png";
import WebImg from "assets/img/download/web.png";

import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFetchHeraVal from "hooks/useFetchHeraPrice";
import DesktopDownload from "./DesktopDownload";
import HeraPriceBlock from "./HeraPriceBlock";

interface IWelcome {
  className?: string;
}
export default function Welcome(Props: IWelcome): ReactElement {
  const bgRef = useRef<HTMLImageElement>(null);
  const welcomeToAndDownloadRef = useRef<HTMLDivElement>(null);
  const mainDiv = useRef<HTMLDivElement>(null);

  const hero1Ref = useRef<HTMLImageElement>(null);
  const hero2Ref = useRef<HTMLImageElement>(null);
  const hero3Ref = useRef<HTMLImageElement>(null);
  const hero4Ref = useRef<HTMLImageElement>(null);
  const hero5Ref = useRef<HTMLImageElement>(null);
  const hero6Ref = useRef<HTMLImageElement>(null);

  const heraPrice = useFetchHeraVal();

  var timeline = gsap.timeline();
  var welcomeToAndDownloadTimeline = gsap.timeline();
  var heroTimelineLeft = gsap.timeline();
  var heroTimelineRight = gsap.timeline();

  const initScrollAnimation = useCallback(() => {
    // gsap.to(bgRef.current, {
    //   scrollTrigger: {
    //     trigger: bgRef.current!,
    //     start: "top 60%",
    //     scrub: true,
    //   },
    //   scale: 1,
    //   filter: "hue-rotate(0deg)",
    //   duration: 400,
    // });

    const animationCharacterObj = {
      duration: 40,
      scale: 0.8,
    };

    heroTimelineLeft.to(
      [hero1Ref.current, hero2Ref.current, hero3Ref.current],
      {
        x: -50,
        ...animationCharacterObj,
      }
    );

    heroTimelineRight.to(
      [hero4Ref.current, hero5Ref.current, hero6Ref.current],
      {
        x: 50,
        ...animationCharacterObj,
      }
    );

    ScrollTrigger.create({
      trigger: ".container-gs",
      animation: heroTimelineLeft,
      endTrigger: ".about-us",
      // pin: true,
      start: "top",
      end: "top 5%", // beyond start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    });

    ScrollTrigger.create({
      trigger: ".container-gs",
      animation: heroTimelineRight,
      endTrigger: ".about-us",
      // pin: true,
      start: "top",
      end: "top 5%", // beyond start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    });

    // gsap.to(hero1Ref.current, {
    //   scrollTrigger: {
    //     trigger: hero1Ref.current!,
    //     endTrigger: ".about-us",
    //     start: "top top",
    //     end: "top 25%", // beyond start
    //     markers: true,
    //     scrub: true,
    //   },
    //   ...animationCharacterObj,
    // });
    const heroYoyoObj = {
      repeat: -1,
      yoyo: true,
    };
    gsap.to(hero1Ref.current, {
      duration: 2.5,
      y: -32,
      ...heroYoyoObj,
    });
    gsap.to(hero2Ref.current, {
      duration: 3.5,
      y: -35,
      ...heroYoyoObj,
    });
    gsap.to(hero3Ref.current, {
      duration: 3,
      y: -20,
      ...heroYoyoObj,
    });
    gsap.to(hero4Ref.current, {
      duration: 2.5,
      y: -20,
      ...heroYoyoObj,
    });
    gsap.to(hero5Ref.current, {
      duration: 3.5,
      y: -25,
      ...heroYoyoObj,
    });
    gsap.to(hero6Ref.current, {
      duration: 3.5,
      y: -40,
      ...heroYoyoObj,
    });
    // gsap.to(welcomeToAndDownloadRef.current, {
    //   duration: 3.5,
    //   y: -40,
    //   ...heroYoyoObj,
    // });

    timeline.to(bgRef.current, {
      scale: 1,
      filter: "hue-rotate(0deg)",
      // backgroundSize: "100% 100%",
      duration: 400,
    });

    // TIME LINE BACKGROUND
    ScrollTrigger.create({
      trigger: ".container-gs",
      animation: timeline,
      endTrigger: ".about-us",
      // pin: true,
      start: "top",
      end: "top 5%", // beyond start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    });

    // welcomeToAndDownloadTimeline.to(welcomeToAndDownloadRef.current, {
    //   y: "+8vh",
    // });

    // // WELCOME TO & DOWNLOAD
    // ScrollTrigger.create({
    //   trigger: ".container-gs",
    //   animation: welcomeToAndDownloadTimeline,
    //   endTrigger: ".about-us",
    //   start: "top",
    //   end: "top 55%",
    //   scrub: 1,
    //   // markers: true,
    // });
    // gsap.to(welcomeToAndDownloadRef.current, {
    //   scrollTrigger: {
    //     trigger: ".container-gs",
    //     endTrigger: ".about-us",
    //     start: "top",
    //     end: "top 45%", // beyond start
    //     markers: true,
    //     scrub: true,
    //   },
    //   y: "-200%",
    // });
  }, []);

  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <div
      className={`section-welcome ${Props.className}`}
      ref={mainDiv}
      data-scroll-section
    >
      <div className="section-welcome-bg-wrapper">
        <img
          ref={bgRef}
          className="section-welcome-bg"
          src={BackgroundImg}
          alt="Hero Arena"
          // style={{ visibility: "hidden" }}
        />
      </div>
      <div className="main-content ha-container container">
        <div>
          <div className="col-12">
            <div className="row">
              <div className="character-side-left col-6">
                <img
                  ref={hero1Ref}
                  className="character-item--c1"
                  src={Char3}
                  alt="Char3"
                />
                <img
                  ref={hero2Ref}
                  className="character-item--c2"
                  src={Char1}
                  alt="Char1"
                />
                <img
                  ref={hero3Ref}
                  className="character-item--c3"
                  src={Char2}
                  alt="Char2"
                />
              </div>
              <div className="character-side-right col-6">
                <img
                  ref={hero4Ref}
                  className="character-item--c4"
                  src={Char5}
                  alt="Char3"
                />
                <img
                  ref={hero5Ref}
                  className="character-item--c5"
                  src={Char4}
                  alt="Char1"
                />
                <img
                  ref={hero6Ref}
                  className="character-item--c6"
                  src={Char6}
                  alt="Char2"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column align-items-center info"
          style={{ zIndex: 5 }}
        >
          <img
            className="text-welcome-to"
            src={WelcomeToImg}
            alt="welcome to"
            style={{ zIndex: 5 }}
          />
          <img
            className="text-hero-arena"
            src={HeroArenaImg}
            alt="hero arena"
            style={{ zIndex: 5 }}
          />
          <div
            className="download d-flex justify-content-between align-items-center px-5 py-3"
            style={{ zIndex: 5 }}
          >
            {/* <DesktopDownload /> */}
            <HeraPriceBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
