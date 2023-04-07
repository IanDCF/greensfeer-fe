import { MouseEventHandler } from "react";
import { Link, matchPath } from "react-router-dom";
import ControlButton from "../ControlButtons/ControlButton";
import { AiOutlineClose } from "react-icons/ai";
import "./PromptModal.scss";

interface Props {
  open: boolean;
  clickHandler: MouseEventHandler;
}

// open function: render the page on true
//close function: axios.patch user company modal seen: true
// navigate to proper destination
const PromptModal: React.FC<Props> = ({ open, clickHandler }) => {
  const onMarketplace = matchPath(location.pathname, "/marketplace");
  if (!open) return <></>;
  return (
    <div className="modal">
      <div className="modal__card">
        <div
          className="modal__close"
          onClick={clickHandler}
          // add onclick close function => axios.patch seen = true
        >
          <AiOutlineClose />
        </div>
        <div className="modal__text">
          {onMarketplace
            ? "Are you affiliated with a company? Join your organization now!"
            : "Ready to list your offering on the marketplace?"}
        </div>
        <div className="modal__controls">
          <div className="modal__decline" onClick={clickHandler}>
            No Thanks
          </div>
          <Link
            className="modal__accept"
            to={
              onMarketplace ? "/create-company/step1" : "/create-listing/step1"
            }
          >
            {`${onMarketplace ? "Search Company" : "Create Listing"}`}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromptModal;