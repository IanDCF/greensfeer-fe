import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import ControlButton from "../../components/ControlButtons/ControlButton";
import "./EditModal.scss";
import { IUser } from "customTypes";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { TEditSchema } from "../../schemas/UserSchema";
import { updateUser } from "../../helpers/userFetcher";
import { getAuth } from "firebase/auth";

interface Props {
  openModal: boolean;
  editHeaderHandler: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent
  ) => void;
  current: IUser;
  setCurrent: (newCurrent: IUser) => void;
}

const populateEdit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const firstNInput = e.currentTarget.elements.namedItem(
    "firstName"
  ) as HTMLInputElement;
  const lastNInput = e.currentTarget.elements.namedItem(
    "lastName"
  ) as HTMLInputElement;
  const headlineInput = e.currentTarget.elements.namedItem(
    "headline"
  ) as HTMLInputElement;
  const marketRoleInput = e.currentTarget.elements.namedItem(
    "marketRole"
  ) as HTMLSelectElement;
  const locationInput = e.currentTarget.elements.namedItem(
    "location"
  ) as HTMLInputElement;
  const profilePicInput = e.currentTarget.elements.namedItem(
    "profilePic"
  ) as HTMLInputElement;
  const bannerPicInput = e.currentTarget.elements.namedItem(
    "bannerPic"
  ) as HTMLInputElement;

  const first_name = firstNInput.value;
  const last_name = lastNInput.value;
  const headline = headlineInput.value;
  const role = marketRoleInput.value;
  const location = locationInput.value;
  const pic_file = profilePicInput.files ? profilePicInput.files[0] : "";
  const banner_file = bannerPicInput.files ? bannerPicInput.files[0] : "";
  let profile_picture;
  let profile_banner;
  pic_file && (profile_picture = await upload(pic_file));
  banner_file && (profile_banner = await upload(banner_file));

  const updateObj = {
    first_name,
    last_name,
    headline,
    role,
    location,
    profile_picture,
    profile_banner,
  };
  return updateObj;
};

const upload = async (pic: File | undefined) => {
  const storage = getStorage();
  if (pic) {
    const newPicRef = ref(storage, `${pic.name}`);
    await uploadBytes(newPicRef, pic);
    const url = await getDownloadURL(newPicRef);
    return url;
  } else return "";
};

export const EditHeaderModal: React.FC<Props> = ({
  openModal,
  editHeaderHandler,
  current,
  setCurrent,
}) => {
  const { currentUser } = getAuth();
  const [update, setUpdate] = useState<TEditSchema>();
  // populate state with current user data
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateObj = await populateEdit(e);
    setUpdate(updateObj);
    setCurrent({
      ...current,
      ...updateObj,
      profile_banner: updateObj.profile_banner || current.profile_banner,
      profile_picture: updateObj.profile_picture || current.profile_picture,
      role: updateObj.role || current.role,
      headline: updateObj.headline || current.headline,
    });

    updateUser(currentUser?.uid, updateObj)
      .then(() => {
        editHeaderHandler(e);
      })
      .catch((err) => err);
  };

  if (!openModal) return <></>;
  return (
    <div className="edit-modal">
      <form className="edit-modal__card" onSubmit={handleSubmit}>
        <div className="edit-modal__close" onClick={editHeaderHandler}>
          <AiOutlineClose />
        </div>
        <div className="edit-modal__title">Edit profile information</div>
        <div className="edit-modal__input-fields">
          <div className="edit-modal__img-upload">
            <div className="edit-modal__pic1">
              <label htmlFor="profilePic" className="edit-modal__label">
                profile picture
              </label>
              <div className="edit-modal__icon">
                <BsCamera />
              </div>
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/*"
                style={{ opacity: 0 }}
                className="edit-modal__input-file"
              />
            </div>
            <div className="edit-modal__pic2">
              <label htmlFor="bannerPic" className="edit-modal__label">
                profile banner
              </label>
              <div className="edit-modal__icon">
                <BsCamera />
              </div>
              <input
                type="file"
                name="bannerPic"
                id="bannerPic"
                accept="image/*"
                style={{ opacity: 0 }}
                className="edit-modal__input-file"
              />
            </div>
          </div>
          <div className="edit-modal__text-input">
            <div className="edit-modal__input-div">
              <label htmlFor="firstName" className="edit-modal__label-text">
                first name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="edit-modal__input"
                placeholder="Enter your first name"
                defaultValue={current.first_name}
              />
            </div>
            <div className="edit-modal__input-div">
              <label htmlFor="lastName" className="edit-modal__label-text">
                last name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="edit-modal__input"
                placeholder="Enter your last name"
                defaultValue={current.last_name}
              />
            </div>
            <div className="edit-modal__input-div">
              <label className="edit-modal__label-text" htmlFor="headline">
                headline
              </label>
              <input
                type="text"
                id="headline"
                name="headline"
                className="edit-modal__input"
                placeholder="Please enter a tagline"
                defaultValue={current.headline}
              />
            </div>
            <div className="edit-modal__input-div">
              <label className="edit-modal__label-text" htmlFor="marketRole">
                market role*
              </label>
              <select
                id="marketRole"
                name="marketRole"
                className="edit-modal__input"
                defaultValue={current.role}
              >
                <option hidden defaultValue={current.role}>
                  {current.role}
                </option>
                <option value="Broker">Broker</option>
                <option value="Buyer">Buyer</option>
                <option value="Carbon Consultant">Carbon Consultant</option>
                <option value="Credit Assurer">Credit Assurer</option>
                <option value="Credit Issuer">Credit Issuer</option>
                <option value="Exchange Operator">Exchange Operator</option>
                <option value="Legal Advisor">Legal Advisor</option>
                <option value="Life Cycle Assessment Practitioner">
                  Life Cycle Assessment Practitioner
                </option>
                <option value="Market Analyst">Market Analyst</option>
                <option value="Offset Fund Manager">Offset Fund Manager</option>
                <option value="Offset Standard Setter">
                  Offset Standard Setter
                </option>
                <option value="Project Aggregator">Project Aggregator</option>
                <option value="Project Developer">Project Developer</option>
                <option value="Project Financier">
                  Project Financier/ Investor
                </option>
                <option value="Registry Operator">Registry Operator</option>
                <option value="Retailer">Retailer</option>
                <option value="Risk Manager">Risk Manager</option>
                <option value="SaaS Provider">SaaS Provider</option>
                <option value="Seller">Seller</option>
                <option value="Third Party Auditor">Third Party Auditor</option>
                <option value="Third Party Validator">
                  Third Party Validator
                </option>
                <option value="Third Party Verifier">
                  Third Party Verifier
                </option>
                <option value="Spectator">Spectator</option>
              </select>
            </div>
            <div className="edit-modal__input-div">
              <label className="edit-modal__label-text">location*</label>
              <input
                type="text"
                id="location"
                name="location"
                className="edit-modal__input"
                placeholder="Where are you located?"
                defaultValue={current.location}
              />
            </div>
          </div>
          <div className="edit-modal__required-text">
            * required input field
          </div>
        </div>
        <div className="edit-modal__controls">
          <div onClick={editHeaderHandler}>
            {" "}
            <ControlButton dark={true} text="Cancel" link="#" btnType="link" />
          </div>
          <ControlButton dark={false} text="Save" btnType="submit" />
        </div>
      </form>
    </div>
  );
};
