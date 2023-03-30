import "./CreateCompany.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import { BsCamera } from "react-icons/bs";
import ControlButton from "../../components/ControlButtons/ControlButton";
import getAllCompanies from "../../helpers/allCompanyFetcher";
import { compile } from "sass";
import React from "react";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handlePic: (e: React.FormEvent<HTMLInputElement>) => void;
  handleBanner: (e: React.FormEvent<HTMLInputElement>) => void;
  isChecked1: boolean;
  handleCheckbox1: (isChecked: boolean) => void;
}

const CompanyForm1 = ({
  handleSubmit,
  handlePic,
  handleBanner,
  handleCheckbox1,
  isChecked1,
}: Props) => {
  return (
    <form className="create-company__form" onSubmit={handleSubmit}>
      <div className="create-company__logo">
        <img
          src={logo}
          alt="Greensfeer Logo"
          className="create-company__logo-img"
        />
      </div>
      <div className="create-company__heading">
        Let's get your company page up and running!
      </div>
      <div className="create-company__input-fields">
        <div className="create-company__img-upload">
          <div className="create-company__company-logo">
            <div className="create-company__label">logo</div>
            <div className="create-company__icon">
              <BsCamera />
              <label htmlFor="logo"></label>
            </div>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handlePic}
              style={{ opacity: 0 }}
              className="create-company__input-file"
            />
          </div>
          <div className="create-company__company-banner">
            <div className="create-company__label">banner</div>
            <div className="create-company__icon">
              <BsCamera />
              <label htmlFor="banner"></label>
            </div>
            <input
              type="file"
              name="banner"
              onChange={handleBanner}
              accept="image/*"
              style={{ opacity: 0 }}
              className="create-company__input-file"
            />
          </div>
        </div>
        <div className="create-company__text-input">
          <div className="create-company__input-div">
            <label className="create-company__label-text">company name*</label>
            <input
              type="text"
              name="name"
              className="create-company__input"
              placeholder="Enter company name"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text">sector*</label>
            <input
              type="text"
              name="sector"
              className="create-company__input"
              placeholder="What sector are you in?"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="marketRole">
              market role*
            </label>
            <select
              id="marketRole"
              name="marketRole"
              className="create-company__input"
            >
              <option defaultValue={"Select market role"}>
                Select market role
              </option>
              <option value="Project Developer">Project Developer</option>
              <option value="Sponsor">Sponsor</option>
              <option value="Carbon Consultancy">Carbon Consultancy</option>
              <option value="Third Party Validator">
                Third-party Validator
              </option>
              <option value="Verification & Validation Body">
                Verification & Validation Body
              </option>
            </select>
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text">location*</label>
            <input
              type="text"
              name="location"
              className="create-company__input"
              placeholder="Where are you located?"
            />
          </div>
        </div>
        <div className="create-company__required-text">
          * required input field
        </div>
      </div>

      <div className="create-company__preferences">
        <div className="create-company__boxes">
          <input
            id="pushNotifications"
            className="create-company__checkbox"
            type="checkbox"
            checked={isChecked1}
            onChange={(e) => handleCheckbox1(e.target.checked)}
          />
          <label className="create-company__label-checkbox" htmlFor="captcha">
            I certify that I am an authorized representative of this
            organization
          </label>
        </div>
      </div>
      <div className="create-company__controls">
        <ControlButton
          dark={true}
          text="Cancel"
          link="/marketplace"
          btnType="link"
        />
        <ControlButton dark={false} text="Next" btnType="submit" />
      </div>
    </form>
  );
};

export default CompanyForm1;
