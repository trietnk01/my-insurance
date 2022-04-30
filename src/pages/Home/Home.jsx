import React from "react";
import "assets/frontpage/frontpage-main.scss";
import logo from "assets/images/logo.svg";
import HomeIcon from "assets/images/home-icon.svg";
function Home() {
  return (
    <div className="relative font-frontpage-global">
      <div className="box-banner flex absolute left-0 top-0 w-full">
        <div className="banner-header flex text-white items-center justify-center absolute right-0 top-0" style={{ columnGap: "100px" }}>
          <div className="item-banner-header">
            <span className="item-banner-header__text">EN</span>
          </div>
          <div className="item-banner-header">
            <span className="item-banner-header__text">Company</span>
          </div>
          <div className="item-banner-header">
            <span className="item-banner-header__text">Partner Market Place</span>
          </div>
        </div>
      </div>
      <div className="kairos-container relative flex mx-auto">
        <div className="col-left">
          <div className="flex justify-between items-center">
            <img src={logo} />
            <div className="flex" style={{ columnGap: "10px" }}>
              <img src={HomeIcon} />
              <span className="front-page-text-home">Home</span>
            </div>
          </div>
          <div className="banner-slogan">
            Asia IT <br /> Market Place
          </div>
        </div>
        <div className="grow"></div>
      </div>
    </div>
  );
}

export default Home;
