import { Link } from "react-router-dom";
import "./ControlButton.scss";
import { TbArrowBackUp } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
interface Props {
  dark: boolean;
  text: string;
  link?: string;
  btnType: "submit" | "link";
}

const ControlButton: React.FC<Props> = ({ dark, text, link, btnType }) => {
  if (btnType === "submit") {
    return (
      <button
        type="submit"
        className={`control-btn ${
          dark ? "control-btn--black" : "control-btn--green"
        }`}
      >
        <div className="control-btn__text">{text}</div>
        <div className="control-btn__icon">
          {text === "Back" && <TbArrowBackUp />}
          {text === "Cancel" && <FaTimes />}
          {text === "Next" && <HiArrowNarrowRight />}
        </div>
      </button>
    );
  } else {
    return (
      <Link
        to={link!}
        rel="noreferrer"
        className={`control-btn ${
          dark ? "control-btn--black" : "control-btn--green"
        }`}
      >
        <div className="control-btn__text">{text}</div>
        <div
          className="control-btn__icon"
          style={!text ? { display: "none" } : {}}
        >
          {text === "Back" && <TbArrowBackUp />}
          {text === "Cancel" && <FaTimes />}
          {text === "Next" && <HiArrowNarrowRight />}
        </div>
      </Link>
    );
  }
};

export default ControlButton;
