import { Link } from "react-router-dom";
import "./ControlButton.scss";
import { TbArrowBackUp } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineArrowRight } from "react-icons/hi";
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
        {(text === "Cancel" || "Next" || "Back") && (
          <div className="control-btn__icon">
            {text === "Back" && <TbArrowBackUp />}
            {text === "Cancel" && <AiOutlineClose />}
            {text === "Next" && <HiOutlineArrowRight />}
          </div>
        )}
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
        {(text === "Cancel" || "Next" || "Back") && (
          <div className="control-btn__icon">
            {text === "Back" && <TbArrowBackUp />}
            {text === "Cancel" && <AiOutlineClose />}
            {text === "Next" && <HiOutlineArrowRight />}
          </div>
        )}
      </Link>
    );
  }
};

export default ControlButton;
