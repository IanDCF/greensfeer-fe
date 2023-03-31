<<<<<<< HEAD
import { MouseEventHandler } from "react";
=======
>>>>>>> 3f1e2f3 (fix: move UserModal to Modal)
import { matchPath } from "react-router-dom";
import ControlButton from "../ControlButtons/ControlButton";
import "./Modal.scss";

interface Props {
  open: boolean;
<<<<<<< HEAD
  clickHandler: MouseEventHandler
=======
>>>>>>> 3f1e2f3 (fix: move UserModal to Modal)
}

// open function: render the page on true
//close function: axios.patch user company modal seen: true
// navigate to proper destination
const Modal: React.FC<Props> = ({ open, clickHandler }) => {
  const onProfile = matchPath(location.pathname, "/profile");
  if (!open) return <></>;
  return (
    <div className="modal-container">
      <div className="modal-container__content">
        <div
          className="modal-container__close"
          onClick={clickHandler}
          // add onclick close function => axios.patch seen = true
        >
          X
        </div>
        <p className="modal-container__text">
          {onProfile
            ? "Do You Have a company? Register it now!"
            : "Ready to create a marketplace listing?"}
        </p>
        <button className="modal-container__no" onClick={clickHandler}>No Thanks</button>
        <ControlButton
          dark={false}
          text={`Add ${onProfile ? "Company" : "Listing"}`}
          link={onProfile ? "/create-company/step1" : "/create-listing/step1"}
          btnType="link"
        />
      </div>
    </div>
  );
};

export default Modal;
