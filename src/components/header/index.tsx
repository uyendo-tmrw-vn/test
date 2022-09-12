import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import LogoImg from "assets/img/nav-logo.png";

import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { useMediaQuery } from "react-responsive";

import { useSelector, useDispatch } from "react-redux";
import { setShowingContractBar } from "redux/slices/counter";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const Header: React.FC = () => {
  const isShowingContractBar = useSelector(
    (state) => state.counter.isShowingContractBar
  );

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const listMenuItem = [
    {
      name: "Homepage",
      url: "#",
      openInNewTab: false,
    },
    {
      name: "Marketplace",
      url: "https://nft.heroarena.app/",
      openInNewTab: true,
    },
    {
      name: "Battle",
      url: "#",
      openInNewTab: false,
    },
    {
      name: "Blog",
      url: "https://blog.heroarena.app/",
      openInNewTab: true,
    },
    {
      name: "INO",
      url: "https://ino.heroarena.app/",
      openInNewTab: true,
    },
    {
      name: "Whitepaper",
      url: "https://docs.google.com/presentation/d/1EweZe2R8f53Ziw81JJgmubvjQr18-4NijYkPZ1sw4jw/",
      openInNewTab: true,
    },
    {
      name: "Play Now",
      url: "https://play.heroarena.app/",
      openInNewTab: true,
      hasBg: true
    },
  ];

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listMenuItem.map((e, i) => (
          <ListItem button key={e.name}>
            {e.openInNewTab === false ? (
              <a href={e.url} style={{ color: "#000" }} className={`${e.hasBg == true && 'has-bg'}`}>
                <span><ListItemText primary={e.name} /></span>
                {e.hasBg == true && <img src="/assets/img/buttons/button-yellow.png" />}
              </a>
            ) : (
              <a
                href={e.url}
                style={{ color: "#000" }}
                target="_blank"
                rel="noreferrer ddd"
                className={`${e.hasBg == true && 'has-bg'}`}
              >
                <span><ListItemText primary={e.name} /></span>
                {e.hasBg == true && <img src="/assets/img/buttons/button-yellow.png" />}
              </a>
            )}
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const [show, setShow] = useState(true);
  const [isInPageContent, setIsInPageContent] = useState(false);

  var scrollPos = 0;
  const controlNavbar = () => {
    // if (window.scrollY > 100) {
    //   setShow(false);
    // } else {
    //   setShow(true);
    // }
    if (window.scrollY > 10) {
      if (document.body.getBoundingClientRect().top > scrollPos) {
        setShow(true);
      } else {
        setShow(false);
      }
      setIsInPageContent(true);
    } else {
      setShow(true);
      setIsInPageContent(false);
    }

    scrollPos = document.body.getBoundingClientRect().top;
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     dispatch(setShowingContractBar(true));
  //     window.scrollTo(0, 0);
  //   };
  // }, []);
  return (
    <div
      className={`col-12 p-0 py-md-2 p-md-2 ha-header ${!show ? "hide-header contract-bar-padding-none" : "show-header"
        } ${isShowingContractBar && !isInPageContent
          ? "contract-bar-padding"
          : "contract-bar-padding-none"
        }`}
      data-scroll-section
    >
      <div className="container ha-header-content shadow d-md-block d-none">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img className="logo" src={LogoImg} alt="HeroArena Logo" />
          </div>
          <div className="d-flex">
            {listMenuItem.map((e, i) => (
              <div className="items" key={e.name}>
                {e.openInNewTab === false ? (
                  <a href={e.url}>{e.name}</a>
                ) : (
                  <a href={e.url} target="_blank" rel="noreferrer" className={`${e.hasBg == true && 'has-bg'}`}>
                    <span>{e.name}</span>
                    {e.hasBg == true && <img src="/assets/img/buttons/button-yellow.png" />}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container ha-header-content shadow d-md-none d-block">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img className="logo" src={LogoImg} alt="HeroArena Logo" />
          </div>
          <div className="d-flex">
            <div className="items">
              <div
                style={{ color: "#000" }}
                onClick={toggleDrawer("right", true)}
              >
                <MenuOutlined />
              </div>
              {/* <SwipeableDrawer
                anchor="right"
                open={state["right"]}
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </SwipeableDrawer> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
