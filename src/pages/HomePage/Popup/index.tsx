import React, { useEffect, useState } from "react";
import { setPopup } from "redux/slices/counter";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroArenaPopup() {
  const [diffTime, setDiffTime] = useState<any>();
  const [countDownTime, setCountDownTime] = useState<any>(null);
  const [showPlayBtn, setShowPlayBtn] = useState<any>(false);
  const cmsLoading = useSelector((state) => state.cmsSlice.cmsLoading);

  const popupData = useSelector((state) => state.cmsSlice.cmsData);

  var carouselSetting = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const countDown = setInterval(() => {
      // const then: any = new Date("2021-12-04T21:00:00");
      // const now: any = new Date();
      const then: any = moment.utc("2021-12-04T15:15:00");
      const now: any = moment.utc();
      const diffTimes = then - now;

      setDiffTime(diffTimes);
      if (diffTimes <= 0) {
        clearInterval(countDown);
        setShowPlayBtn(true);
        setCountDownTime({
          day: "0",
          hour: "0",
          minute: "0",
          second: "0",
        });
      } else {
        const duration: any = moment.duration(diffTimes, "milliseconds");
        const result = moment.duration(duration - 1000, "milliseconds");
        setCountDownTime({
          day: result.days(),
          hour: result.hours(),
          minute: result.minutes(),
          second: result.seconds(),
        });
      }
    }, 1000);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    let entered = sessionStorage["popup-flag"];
    if (!entered) {
      dispatch(setPopup(true));
      sessionStorage["popup-flag"] = true;
    } else {
      // dispatch(setPopup(false));
      // sessionStorage["popup-flag"] = false;
    }
  }, [dispatch]);
  const popupOpen = useSelector((state) => state.counter.popupOpen);

  return (
    // popupOpen
    <div>
      <Modal
        // visible={true}
        visible={popupOpen}
        onCancel={() => {
          dispatch(setPopup(false));
          sessionStorage["popup-flag"] = false;
        }}
        cancelButtonProps={{
          className: "modal-button-cancel",
        }}
        onOk={() => { }}
        okButtonProps={{
          className: "detail-modal-button-ok",
        }}
        closeIcon={() => <></>}
        footer={null}
        className="popup-launching-wrap"
      >
        <div className="popup-launching">
          {/* <a
            href={popupData?.data?.attributes?.popup?.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`https://cms.heroarena.app${popupData?.data?.attributes?.popup?.image?.data?.attributes?.url}`}
              style={{ width: "100%" }}
              alt="popup"
            />
          </a> */}


          <Slider {...carouselSetting}>

            {popupData?.data?.attributes?.popups?.map((item, index) => (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <img
                  src={`https://cms.heroarena.app${item?.image?.data?.attributes?.url}`}
                  style={{ width: "100%" }}
                  alt="popup"
                />
              </a>
            ))
            }
          </Slider>


          {/* <div className="popup-launching--overlay">
            <div className="clock-arena">
              <div className="clock">{countDownTime?.day}</div>
              <div className="clock">{countDownTime?.hour}</div>
              <div className="clock">{countDownTime?.minute}</div>
              <div className="clock">{countDownTime?.second}</div>
            </div>
            <div className="button-arena">
              {showPlayBtn ? (
                <a
                  className="button-popup"
                  href="https://play.heroarena.app"
                  target="_blank"
                ></a>
              ) : (
                <a
                  className="button-popup"
                  href="https://blog.heroarena.app/news/official-game-release-of-hero-arena/"
                  target="_blank"
                ></a>
              )}
              <a
                className="button-popup"
                href="https://nft.heroarena.app/"
                target="_blank"
              ></a>
              <a
                className="button-popup"
                href="https://ino.heroarena.app/"
                target="_blank"
              ></a>
            </div>
          </div> */}
        </div>
      </Modal>
    </div>
  );
}
