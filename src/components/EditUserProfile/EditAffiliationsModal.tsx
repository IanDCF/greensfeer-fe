import { MouseEventHandler } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ControlButton from "../ControlButtons/ControlButton";
import PlaceholderLogo from "../../assets/images/placeholder-logo.png";
import { IoIosAdd } from "react-icons/io";
import "./EditModal.scss";

interface Props {
  openModal: boolean;
  editAffiliationsHandler: MouseEventHandler;
}

export const EditAffiliationsModal: React.FC<Props> = ({
  openModal,
  editAffiliationsHandler,
}) => {
  const logoStyle: React.CSSProperties = {
    background: `url(${PlaceholderLogo}) center/cover no-repeat`,
  };

  if (!openModal) return <></>;

  return (
    <div className="edit-modal">
      <div className="edit-modal__card">
        <div className="edit-modal__close" onClick={editAffiliationsHandler}>
          <AiOutlineClose />
        </div>
        <div className="edit-modal__title-aff">Edit affiliations</div>
        <div className="edit-modal__input-fields">
          <div className="edit-modal__my-aff">
            <div className="edit-modal__sub-title">My affiliations</div>
            <div className="edit-modal__aff-display">
              <div className="edit-modal__aff-card">
                <div className="edit-modal__aff-logo" style={logoStyle}></div>
                <div className="edit-modal__aff-details">
                  <div className="edit-modal__aff-name">Name of Company</div>
                  <div className="edit-modal__aff-since">
                    Affiliated since May 2022
                  </div>
                </div>
                <div className="edit-modal__aff-options">
                  <div className="edit-modal__aff-delete">delete</div>
                </div>
              </div>
              <div className="edit-modal__aff-card">
                <div className="edit-modal__aff-logo" style={logoStyle}></div>
                <div className="edit-modal__aff-details">
                  <div className="edit-modal__aff-name">Name of Company</div>
                  <div className="edit-modal__aff-since">
                    Affiliated since May 2022
                  </div>
                </div>
                <div className="edit-modal__aff-options">
                  <div className="edit-modal__aff-delete">delete</div>
                </div>
              </div>
            </div>
          </div>

          <div className="edit-modal__aff-add">
            <div className="edit-modal__sub-title">Add affiliation</div>
            <div className="edit-modal__aff-add-icon">
              <IoIosAdd />
            </div>
          </div>
        </div>
        <div className="edit-modal__controls">
          <div onClick={editAffiliationsHandler}>
            {" "}
            <ControlButton dark={true} text="Cancel" link="#" btnType="link" />
          </div>
          <ControlButton dark={false} text="Save" btnType="submit" />
        </div>
      </div>
    </div>
  );
};
