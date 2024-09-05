import React from "react";
import "./Footer.css";
import countryList from "../../CountryList";
import FacebookIcon from "../../assets/icons/facebook_icon.png";
import InstagramIcon from "../../assets/icons/instagram_icon.png";
import TiktokIcon from "../../assets/icons/tiktok_icon.png";
import XIcon from "../../assets/icons/x_icon.png";
import YoutubeIcon from "../../assets/icons/youtube_icon.png";
import LogoImage from "../../assets/newdaw_icon_white.png";

function Footer() {
  return (
    <div className="footer">
      <h2>NewDaw</h2>
      <div className="footer-container-1">
        <div className="social-medias">
          <p>Register Live or Push&nbsp; &#x27A4;</p>
          <p>About NewDaw&nbsp; &#x27A4;</p>
          <p>Jobs&nbsp; &#x27A4;</p>
          <div className="icons">
            <img src={FacebookIcon} alt="Facebook Icon" />
            <img src={XIcon} alt="X Icon" />
            <img src={YoutubeIcon} alt="Youtube Icon" />
            <img src={InstagramIcon} alt="Instagram Icon" />
            <img src={TiktokIcon} alt="TikTok Icon" />
          </div>
        </div>
        <div className="education">
          <span className="span-title">Education</span>
          <p>Offers for students and teachers&nbsp; &#x27A4;</p>
          <p>NewDaw for classroom&nbsp; &#x27A4;</p>
          <p>NewDaw for Colleges and Universities&nbsp; &#x27A4;</p>
        </div>
        <div className="newsletter">
          <span className="span-title">Sign up to our newsletter</span>
          <span className="email-long">
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </span>
          <div className="input-container">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="footer-container-2">
        <div className="community">
          <span className="span-title">Community</span>
          <p>Find NewDaw User Groups&nbsp; &#x27A4;</p>
          <p>Find Certified Training&nbsp; &#x27A4;</p>
          <p>Become a Certified Trainer&nbsp; &#x27A4;</p>
        </div>
        <div className="langauge-and-location">
          <span className="span-title">Language and Location</span>
          <div className="dropdowns">
            <select name="languages" id="languages">
              <option value="1">English</option>
              <option value="2">Deutsch</option>
              <option value="3">Français</option>
              <option value="4">日本語</option>
              <option value="5">中国人</option>
              <option value="6">Español</option>
            </select>
            <select name="countries" id="countries">
              {countryList.map((country, index) => (
                <option value={6 + index}>{country}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="last-line">
        <div className="texts">
          <p>Contact Us</p>
          <p>Press Resources</p>
          <p>Legal Info</p>
          <p>Privacy Policy</p>
          <p>Cookie Settings</p>
          <p>Imprint</p>
        </div>
        <div className="made-in-berlin">
          <p>Made in Berlin</p>
          <img src={LogoImage} alt="Logo Image" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
