import React from "react";

import Profile from "../../assist/img/me.png";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="img">
        <img src={Profile} alt="profile_img" />
      </div>
      <div className="introduction">
        <h5>Hi, my name is</h5>
        <h2>Puskar Adhikari</h2>
        <p>Front-End web developer specializing in building web app</p>
        <div className="social-link">
          <a href="https://github.com/devpuskar">
            <FaGithub />
          </a>
          <a href="https://twitter.com/puskar_ad">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/devpuskar/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/dev.puskar/">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/devPuskar1">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
