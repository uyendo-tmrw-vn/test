import React, { ReactElement, useEffect, useRef, useState } from "react";
import BackgroundImg from "assets/img/section-about-us.jpg";
import AboutUsBtnImg from "assets/img/button/about-us.png";
import YouTube, { Options } from "react-youtube";
import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setPlayingVideo } from "redux/slices/counter";
import { useDispatch, useSelector } from "react-redux";

interface Props {}

var timelineVideo = gsap.timeline();
export default function AboutUs({}: Props): ReactElement {
  const dispatch = useDispatch();
  const isPlayingVideo = useSelector((state) => state.counter.isPlayingVideo);
  const [refYoutube, setRefYoutube] = useState(null);
  const [refYoutubeBackup, setRefYoutubeBackup] = useState(null);
  const [isFrameReady, setIsFrameReady] = useState(false);

  const testRef = useRef();
  useEffect(() => {
    // console.log(refYoutube);
    // refYoutube?.target.playVideo();
  }, [refYoutube]);
  useEffect(() => {
    // if (refYoutube) {
    //   if (isPlayingVideo) {
    //     refYoutube.target.playVideo();
    //   } else {
    //     refYoutube.target.pauseVideo();
    //   }
    // }
  }, [isPlayingVideo]);
  useEffect(() => {
    if (isFrameReady) {
      // console.log("loaded from react", refYoutube);
      setTimeout(() => {
        refYoutube.target.playVideo();
        // console.log("loaded from sto");
      }, 2000);
    }
  }, [isFrameReady]);
  const youtubeOptions: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      playlist: "FjrvOPo4-8g",
      autoplay: 1,
      loop: 1,
    },
  };

  // TIME LINE GSAP
  ScrollTrigger.create({
    id: "trigger-video",
    trigger: ".about-us",
    animation: timelineVideo,
    endTrigger: ".section-character-system",
    // pin: true,
    start: "top 20%",
    end: "top 5%", // beyond start
    // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // markers: true,
    onEnter: () => _handleOnStart(),
    onLeave: () => _handleOnLeave(),
    onEnterBack: () => _handleOnStartBack(),
    onLeaveBack: () => _handleOnLeaveBack(),
  });

  const _handleOnStart = async () => {
    if (refYoutube) {
      refYoutube.target.setVolume(80);
    }
  };
  const _handleOnStartBack = () => {
    if (refYoutube) {
      refYoutube.target.setVolume(80);
    }
  };
  const _handleOnLeave = () => {
    if (refYoutube) {
      refYoutube.target.setVolume(32);
    }
  };
  const _handleOnLeaveBack = () => {
    if (refYoutube) {
      refYoutube.target.setVolume(32);
    }
  };

  const _onReady = (e) => {
    setRefYoutube(e);
    setRefYoutubeBackup(e);
    setIsFrameReady(true);
    // console.log("ready");
    // ScrollTrigger.refresh();
  };
  const _onPause = (e) => {
    // dispatch(setPlayingVideo(false));
    // setRefYoutube(null);
    // ScrollTrigger.getById("trigger1").kill(true);
    // ScrollTrigger.getById("trigger1").kill(true);
    // let Alltrigger = ScrollTrigger.getAll();
    // for (let i = 0; i < Alltrigger.length; i++) {
    //   console.log(Alltrigger[i]);
    //   Alltrigger[3].kill(true);
    // }
    // ScrollTrigger.getById("trigger-video").kill(true);
    console.log("paused");
    // ScrollTrigger.getById("trigger-video").disable(false);
  };
  const _onPlay = (e) => {
    // dispatch(setPlayingVideo(true));
    // console.log("123123 play");
  };

  return (
    <div className="section section-about-us about-us" id="about-us">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          {/* about us btn */}
          <div
            className="imgBtn my-3"
            onClick={() => refYoutube?.target.playVideo()}
          >
            <img className="imgBtn-btn" src={AboutUsBtnImg} alt="about-us" />
          </div>
          {/* description */}
          <h6
            className="my-4 text-center text-description color-white"
            data-aos="fade"
          >
            Hero Arena is a Metaverse RPG Game built on blockchain technology.
            We have inspiration from the Dota2 Game. It is a futuristic world
            with 5 different factions, each with their own strengths and
            weaknesses. Players can recruit heroes which then can be used to
            progress in the campaign mode and fight against the enemies. In the
            combat arena players can earn profit from your enemies.{" "}
          </h6>
          {/* video */}
          <div className="my-3 px-1 px-md-5 video-frame">
            <div className="iframe-video-wrapper">
              {/* <div id="iframe-video"></div> */}
              {/* <iframe
                className="iframe-video"
                src="https://www.youtube.com/embed/FjrvOPo4-8g?playlist=FjrvOPo4-8g&autoplay=1&loop=1"
                title="Hero Arena"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
              <YouTube
                ref={testRef}
                videoId="FjrvOPo4-8g" // defaults -> null
                id="FjrvOPo4-8g"
                // defaults -> null
                className="iframe-video" // defaults -> null
                // containerClassName={string}       // defaults -> ''
                opts={youtubeOptions} // defaults -> {}
                onReady={_onReady}
                onPause={_onPause}
                onPlay={_onPlay}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section-about-us-bg-wrapper">
        <img width="100%" src={BackgroundImg} alt="Hero Arena" />
      </div> */}
    </div>
  );
}
