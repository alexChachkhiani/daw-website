import React from "react";
import "./Main.css";
import HeaderImage from "../../assets/newdaw_header_image.jpg";
import IntroductionImage1 from "../../assets/introduction_images_1.jpg";
import IntroductionImage2 from "../../assets/introduction_images_2.jpg";
import Video from "../../assets/why_ableton.mp4";

function Main() {
  return (
    <div className="main">
      <div className="header-image">
        <div className="h1-box">
          <h1>NewDaw</h1>
        </div>
        <img src={HeaderImage} alt="NewDaw Header Image" />
      </div>
      <div className="text-container">
        <h2>
          We make <span>Live</span>, <span>Push</span>, <span>Note</span> and{" "}
          <span>Link</span> — unique software and hardware for music creation
          and performance. With these products, our community of users creates
          amazing things.
        </h2>
        <p>
          NewDaw was founded in 2023 and released the first version of Live in
          2024. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
      <div className="introduction-images">
        <img
          src={IntroductionImage1}
          alt="Introduction Images 1"
          className="introduction-image-1"
        />
        <div className="introduction-images-color">
          <img src={IntroductionImage2} alt="Introduction Images 2" />
        </div>
      </div>
      <div className="text-container">
        <h2>
          Making music isn't easy. It takes time, effort, and learning. But when
          you're in the flow, it's incredibly rewarding.
        </h2>
        <p>
          We feel the same way about making NewDaw products. The driving force
          behind NewDaw is our passion for what we make, and the people we make
          it for.
        </p>
      </div>
      <div className="video">
        <video controls autostart autoPlay src={Video} type="video/mp4" />
        <div className="video-text">
          <p>Why NewDaw - Juanpe Bolivar</p>
        </div>
      </div>
      <div className="text-container">
        <h2>
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </h2>
        <p>
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </div>
    </div>
  );
}

export default Main;
