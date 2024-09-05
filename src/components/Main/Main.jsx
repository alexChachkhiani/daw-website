import React from "react";
import "./Main.css";
import HeaderImage from "../../assets/newdaw_header_image.jpg";
import IntroductionImage1 from "../../assets/introduction_image_1.jpg";
import IntroductionImage2 from "../../assets/introduction_image_2.jpg";
import Video from "../../assets/why_ableton.mp4";
import MakingMusic from "../../assets/making_music.jpg";
import NewDawHeadquarters from "../../assets/newdaw_headquarters.jpeg";
import Planning from "../../assets/planning.jpg";
import BigImage from "../../assets/big_image.jpg";
import GroupWorkImage1 from "../../assets/group_work_image_1.jpg";
import GroupWorkImage2 from "../../assets/group_work_image_2.jpg";
import LastImage from "../../assets/last_image.jpg";

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
      <div className="div-and-images">
        <img
          src={MakingMusic}
          alt="Making Music"
          className="man-making-music-img"
        />
        <div className="div-and-two-images">
          <img src={Planning} alt="Planning Image" />
          <img src={NewDawHeadquarters} alt="NewDaw Headquarters" />
        </div>
      </div>
      <div className="text-container">
        <h2>
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </h2>
        <p>
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We've learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don't always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </div>
      <div className="header-image">
        <img src={BigImage} alt="Big Image" />
      </div>
      <div className="text-container">
        <h2>
          We're passionate about what we do, but we're equally passionate about
          improving who we are.
        </h2>
        <p>
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <p>
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </div>
      <div className="group-work-div">
        <div className="img-container">
          <img
            src={GroupWorkImage1}
            alt="Group Called Image 1"
            className="img-outside img-outside-1"
          />
          <div>
            <img
              src={GroupWorkImage2}
              alt="Group Work Image 2"
              className="img-outside img-outside-2"
            />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h2>
          We want our employees to love it here. Since we're looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </h2>
        <p>
          If you're joining us in Berlin, we'll help with relocation and
          paperwork. We'll even provide you with free German or English lessons.
          Plus, working in Germany means you can expect comprehensive health
          insurance for you and your family, as well as generous maternity and
          paternity leave. Office hours are flexible, but it's not all work; we
          have several company and team outings throughout the year as well as a
          variety of fun, informal small-group activities.
        </p>
      </div>
      <div className="image-next-to-div">
        <img src={LastImage} alt="Last Image" />
        <div className="div-with-text">
          <div className="text-inside-div">
            <h2>
              We're really proud of the work we've done so far. But there's so
              much more to come. If you'd like to be a part of it, please join
              us.
            </h2>
            <h2>
              <span>See Latest Jobs &#x261B;</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
