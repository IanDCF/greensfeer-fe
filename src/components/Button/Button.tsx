import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface Props {
  darkMode: boolean;
  text: string;
  link: string;
}

const Button: React.FC<Props> = ({ darkMode, text, link }) => {
  return (
    <Link
      to={link}
      rel="noreferrer"
      className={`btn ${darkMode ? "btn--dark" : "btn--light"}`}
    >
      {text}
    </Link>
  );
};

export default Button;
