import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
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
  const onMarketplace = location.pathname.includes("/marketplace/");
  const modalText = onMarketplace
    ? "Are you affiliated with a company? Join your organization or create a new one!"
    : "Ready to list your offering on the marketplace?";
  const acceptPath = onMarketplace ? "/search-company" : "/search-affiliation";
  const acceptText = `${onMarketplace ? "Search Company" : "Create Listing"}`;

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
        <div className="modal__text">{modalText}</div>
        <div className="modal__controls">
          <div className="modal__decline" onClick={clickHandler}>
            Maybe later
          </div>
          <Link
            onClick={clickHandler}
            className="modal__accept"
            to={acceptPath}
          >
            {acceptText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromptModal;
