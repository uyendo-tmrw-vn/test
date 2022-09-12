import React, { ReactElement } from "react";
import RoadmapText from "assets/img/text/roadmap.png";
import RoadmapInfoGraphic from "assets/img/infographic/roadmap-info.png";
import RoadmapInfoGraphicMobile from "assets/img/infographic/roadmap-info-mobile.png";

interface Props {}

export default function RoadMap({}: Props): ReactElement {
  return (
    <div className="section section-roadmap">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <img className="roadmap-text-img" src={RoadmapText} alt="roadmap" />
          </div>
          <div className="mt-5 d-none d-md-block" data-aos="zoom-in">
            <img
              className="roadmap-board"
              src={RoadmapInfoGraphic}
              alt="roadmap"
            />
          </div>
          <div className="mt-5 d-block d-md-none" data-aos="zoom-in">
            <img
              className="roadmap-board"
              src={RoadmapInfoGraphicMobile}
              alt="roadmap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
