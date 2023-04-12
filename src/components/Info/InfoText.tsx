import React from "react";
import Button from "../Button/Button";
import "./InfoText.scss";

interface Props {
  darkMode: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonText: string;
  link: string;
}

const InfoText: React.FC<Props> = ({
  darkMode,
  topLine,
  headline,
  description,
  buttonText,
  link,
}) => {
  return (
    <div className="text-container">
      <div className="text">
        <h3 className="text__topline">{topLine}</h3>
        <h2
          className={`text__headline ${!darkMode && "text__headline--light"}`}
        >
          {headline}
        </h2>
        <p
          className={`text__description ${
            !darkMode && "text__description--light"
          }`}
        >
          {description}
        </p>
        <div className="text__button">
          <Button darkMode={darkMode} text={buttonText} link={link} />
        </div>
      </div>
    </div>
  );
};

export default InfoText;
