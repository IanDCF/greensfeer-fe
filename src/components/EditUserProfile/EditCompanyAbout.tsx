import { MouseEventHandler, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ControlButton from "../ControlButtons/ControlButton";
import "./EditModal.scss";
import { ICompany } from "customTypes";
import { updateCompany } from "../../helpers/companyFetcher";

interface Props {
  openModal: boolean;
  editAboutHandler: MouseEventHandler;
  CompanyData: ICompany;
}
const populateEdit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const aboutInput = e.currentTarget.elements.namedItem(
    "about"
  ) as HTMLInputElement;
  const about = aboutInput.value;

  return about;
};

export const EditCompanyAbout: React.FC<Props> = ({
  openModal,
  editAboutHandler,
  CompanyData,
}) => {
  const [description, setDescription] = useState<Object>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const update = { description: populateEdit(e) };
    setDescription(update);
    CompanyData &&
      description &&
      updateCompany(CompanyData.company_id, description);
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
                name="about"
                defaultValue={CompanyData?.description}
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
      </form>
    </div>
  );
};
