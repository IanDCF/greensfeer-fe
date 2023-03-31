import { matchPath } from "react-router-dom";
import ControlButton from "../ControlButtons/ControlButton";

import "./Modal.scss";

// open function: render the page on true
//close function: axios.patch user company modal seen: true
// navigate to proper destination
const UserModal: React.FC = () => {
  const onProfile = matchPath(location.pathname, "/profile");
  return (
    <div className="modal-container">
      <div
        className="modal-container__close"
        onClick={() => {
          console.log("click");
          // set open = false
          //axios.patch user.
        }}
        // add onclick close function => axios.patch seen = true
      >
        X
      </div>
      <p className="modal-container__text">
        {onProfile
          ? "Do You Have a company? Register it now!"
          : "Ready to create a marketplace listing?"}
      </p>
      <button className="modal-container__no">No Thanks</button>
      <ControlButton
        dark={false}
        text={`Add Your ${onProfile ? "Company" : "Listing"}`}
        link={onProfile ? "/create-company/step1" : "/create-listing/step1"}
        btnType="link"
      />
    </div>
  );
};

export default UserModal;
