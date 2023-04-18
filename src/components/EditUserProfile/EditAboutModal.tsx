import React, { MouseEventHandler } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ControlButton from "../ControlButtons/ControlButton";
import "./EditModal.scss";
import { IUser } from "customTypes";
import populateEdit from "../../helpers/populateAbout";
import { updateUser } from "../../helpers/userFetcher";
import { getAuth } from "firebase/auth";

interface Props {
  openModal: boolean;
  editAboutHandler: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent
  ) => void;
  current: IUser;
  setCurrent: (newCurrent: IUser) => void;
}

export const EditAboutModal: React.FC<Props> = ({
  openModal,
  editAboutHandler,
  current,
  setCurrent,
}) => {
  const { currentUser } = getAuth();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      role,

      headline,
      profile_picture,
      profile_banner,
    } = current;
    const location: string = current.location || "";
    const update = {
      about: populateEdit(e),
      first_name,
      last_name,
      role,
      location,
      headline,
      profile_picture,
      profile_banner,
    };
    console.log(currentUser);
    setCurrent({ ...current, about: update.about });
    currentUser &&
      update.about &&
      updateUser(currentUser.uid, update)
        .then(() => {
          editAboutHandler(e);
        })
        .catch((err) => err);
  };
  if (!openModal) return <></>;
  return (
    <div className="edit-modal">
      <form className="edit-modal__card" onSubmit={handleSubmit}>
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
                defaultValue={current?.about}
                name="about"
                className="edit-modal__input-textarea"
                placeholder="Tell us who you are, such as details about your professional background and area of focus."
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
      </form>
    </div>
  );
};
