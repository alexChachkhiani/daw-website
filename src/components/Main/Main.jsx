import React from "react";
import "./Main.css";
import HeaderImage from "../../assets/newdaw_header_image.jpg";

function Main() {
  return (
    <div className="main">
      <div className="header-image">
        <div className="h1-box">
          <h1>NewDaw</h1>
        </div>
        <img src={HeaderImage} alt="NewDaw Header Image" />
      </div>
    </div>
  );
}

export default Main;
