import React from "react";
import "assets/frontpage/frontpage-main.scss";
function Home() {
  return (
    <div className="relative">
      <div className="box-banner flex absolute left-0 top-0 w-full">
        <div className="box-left"></div>
        <div className="box-right"></div>
      </div>
      <div className="kairos-container relative flex">
        <div className="col-left"></div>
        <div className="col-right grow"></div>
      </div>
    </div>
  );
}

export default Home;
