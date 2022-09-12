// @ts-nocheck

import React, { lazy, useEffect } from "react";
import Feature from "pages/HomePage/Sections/Feature/index";
import { useMediaQuery } from "react-responsive";
import ContractBar from "components/ContractBar";
import FloatingButton from "components/FloatingButton";
import NFTItem from "./Sections/NFTItems";
import { useDispatch, useSelector } from "react-redux";
import { getCms } from "../../redux/slices/cmsSlice";
// import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  const HeroArenaPopup = lazy(() => import("pages/HomePage/Popup/index"));
  const Header = lazy(() => import("components/header/index"));
  const Welcome = lazy(() => import("pages/HomePage/Sections/Welcome/index"));
  const WelcomeMobile = lazy(
    () => import("pages/HomePage/Sections/WelcomeMobile")
  );
  const MobileHeraPrice = lazy(
    () => import("pages/HomePage/Sections/MobileHeraPrice")
  );
  const MobileDownload = lazy(
    () => import("pages/HomePage/Sections/MobileDownload")
  );
  const AboutUs = lazy(() => import("pages/HomePage/Sections/AboutUs/index"));
  const CharacterSystem = lazy(
    () => import("pages/HomePage/Sections/CharacterSystem/index")
  );
  const Feature = lazy(() => import("pages/HomePage/Sections/Feature/index"));
  const TokenConomic = lazy(
    () => import("pages/HomePage/Sections/TokenConomic/index")
  );
  const TokenMetric = lazy(
    () => import("pages/HomePage/Sections/TokenMetric/index")
  );
  const Partner = lazy(() => import("pages/HomePage/Sections/Partner/index"));
  const RoadMap = lazy(() => import("pages/HomePage/Sections/RoadMap/index"));
  const Team = lazy(() => import("pages/HomePage/Sections/Team/index"));
  const Footer = lazy(() => import("pages/HomePage/Sections/Footer/index"));
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const cmsData = useSelector((state) => state.cmsSlice.cmsData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCms());
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 overflow-hidden" id="main-container">
      <Header />
      <div className="container-gs">
        <HeroArenaPopup />
        <FloatingButton />
        <ContractBar />
        {/* {isDesktop ? <Welcome /> : <WelcomeMobile />} */}
        {/* {!isDesktop && <MobileDownload />} */}
        {!isDesktop && <MobileHeraPrice />}
        <AboutUs />
        <CharacterSystem />
        <NFTItem />
        <Feature />
        <TokenConomic />
        <TokenMetric />
        <Partner />
        <RoadMap />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
