import { MouseEventHandler } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ControlButton from "../ControlButtons/ControlButton";
import "./EditModal.scss";

interface Props {
  openModal: boolean;
  editAboutHandler: MouseEventHandler;
}

export const EditCompanyAbout: React.FC<Props> = ({
  openModal,
  editAboutHandler,
}) => {
  if (!openModal) return <></>;
  return (
    <div className="edit-modal">
      <div className="edit-modal__card">
        <div className="edit-modal__close" onClick={editAboutHandler}>
          <AiOutlineClose />
        </div>
        <div className="edit-modal__title">Edit about information</div>
        <div className="edit-modal__input-fields">
          <div className="edit-modal__text-input">
            <div className="edit-modal__input-div-textarea">
              <label className="edit-modal__label-text" htmlFor="about">
                about
              </label>
              <textarea
                id="about"
                name="about"
                className="edit-modal__input-textarea"
                placeholder="Tell us about your company, such as your mission, initiatives and area of focus."
              />
            </div>
          </div>
          <div className="edit-modal__characters">0/2000</div>
        </div>
        <div className="edit-modal__controls">
          <div onClick={editAboutHandler}>
            {" "}
            <ControlButton dark={true} text="Cancel" link="#" btnType="link" />
          </div>
          <ControlButton dark={false} text="Save" btnType="submit" />
        </div>
      </div>
    </div>
  );
};
