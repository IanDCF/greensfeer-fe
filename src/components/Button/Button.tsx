import React from "react";
import "./Button.scss";

interface Props {
  darkMode: boolean;
  text: string;
  link: string;
}

const Button: React.FC<Props> = ({ darkMode, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`btn ${darkMode ? "btn--dark" : "btn--light"}`}
    >
      {text}
    </a>
  );
};

export default Button;
