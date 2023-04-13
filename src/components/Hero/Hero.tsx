import React, { useState } from "react";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Video from "../../assets/videos/video.mp4";
import "./Hero.scss";

const Hero: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div id="hero" className="hero">
      <div className="hero__bg">
        <video className="hero__video" autoPlay loop muted src={Video} />
      </div>

      <div className="hero__wrap">
        <h1>Unleash the Power of Carbon Offsets</h1>

        <p>
          We empower project developers by connecting them with a diverse
          network of carbon consultants, investors, auditors and more
        </p>

        <div className="hero__btn">
          <NavLink
            className="hero__btn-link"
            to="/register"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started
            {hover ? (
              <MdArrowForward className="hero__btn-arrow" />
            ) : (
              <MdKeyboardArrowRight className="hero__btn-arrow" />
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
