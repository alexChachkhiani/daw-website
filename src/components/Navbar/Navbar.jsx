import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../../assets/newdaw_icon_white.png";

function TopNavbar() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showPlus, setShowPlus] = useState(true);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const linkStyles = (index) => ({
    color:
      selectedIndex === index ? "rgb(125, 150, 255)" : "rgb(245, 245, 245)",
    cursor: "pointer",
    marginRight: "10px",
  });

  const handleShowPlus = () => {
    setShowPlus((showPlus) => !showPlus);
  };

  return (
    <div className="navbar">
      <div
        className={"top-navbar"}
        style={{
          boxShadow: showPlus ? "0 2.5px 5px -5px rgb(240, 240, 240)" : "none",
        }}
      >
        <div className="top-navbar-1">
          <img src={logoImage} alt="NewDaw Icon" />
          <p>Live</p>
          <p>Push</p>
          <p>Note</p>
          <p>Link</p>
          <p>Shop</p>
          <p>Packs</p>
          <p>Help</p>
          <p>
            <span onClick={handleShowPlus}>
              {showPlus ? "More +" : "Less -"}
            </span>
          </p>
        </div>
        <div className="top-navbar-1 left-div">
          <p className="try-newdaw">Try NewDaw 1.3.4 for Free</p>
          <p>
            <span className="log-in">Log In or Sign Up</span>
          </p>
        </div>
      </div>
      {!showPlus && (
        <div
          className="hidden-navbar"
          style={{ boxShadow: "0 2.5px 5px -5px rgb(240, 240, 240)" }}
        >
          <div className="hidden-navbar-1">
            <h3>More on NewDaw.com: </h3>
            <div className="next-to-each-other">
              <p>Blog</p>
              <p>newDaw for Classroom</p>
              <p>NewDaw for Collages and Universities</p>
              <p>Certified Training</p>
              <p onClick={() => handleClick(0)} style={linkStyles(0)}>
                About
              </p>
              <p onClick={() => handleClick(1)} style={linkStyles(1)}>
                Jobs
              </p>
              <p onClick={() => handleClick(2)} style={linkStyles(2)}>
                Partners
              </p>
            </div>
          </div>
          <div className="hidden-navbar-2">
            <h3>New From NewDaw</h3>
            <div className="hidden-navbar-2-5">
              <div className="text-box">
                <span>Loop</span>
                <p>
                  Watch Talks, Performances and Features from NewDaw's Summit
                  for Music Makers
                </p>
              </div>
              <div className="text-box">
                <span>Learning Music</span>
                <p>
                  Learn the fundamentals of music making right in your browser.
                </p>
              </div>
              <div className="text-box">
                <span>Learning Synths</span>
                <p>
                  Get started with synthesis using a web-based synth and
                  accompanying lessons.
                </p>
              </div>
              <div className="text-box">
                <span>Making Music</span>
                <p>
                  Some tips from 84 Creative Strategies for Electronic
                  Producers.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div class="sticky-navbar">
        <div className="navbar-items">
          <a href="#" onClick={() => handleClick(0)} style={linkStyles(0)}>
            About
          </a>
          <a href="#" onClick={() => handleClick(1)} style={linkStyles(1)}>
            Jobs
          </a>
          <a href="#" onClick={() => handleClick(2)} style={linkStyles(2)}>
            Partners
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
