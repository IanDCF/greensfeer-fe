import "./CreateCompany.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import { BsCamera } from "react-icons/bs";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";

const CompanyForm2 = () => {
  return (
    <form className="create-company__form">
      {/* Back btn has to change state to display previous page */}
      <div className="create-company__back-btn">
        <TbArrowBackUp />
      </div>
      <div className="create-company__logo">
        <img
          src={logo}
          alt="Greensfeer Logo"
          className="create-company__logo-img"
        />
      </div>
      <div className="create-company__heading">
        Round out your profile with a few extra details, or skip
      </div>
      <div className="create-company__input-fields">
        <div className="create-company__text-input">
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="headline">
              headline
            </label>
            <input
              id="headline"
              type="text"
              className="create-company__input"
              placeholder="Give us your best tagline!"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="about">
              about
            </label>
            <input
              id="about"
              type="text"
              className="create-company__input"
              placeholder="What's your mission?"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="linkedin">
              linkedin
            </label>
            <input
              id="linkedin"
              type="text"
              className="create-company__input"
              placeholder="Add your LinkedIn URL"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="otherLinks">
              other links
            </label>
            <input
              id="otherLinks"
              type="text"
              className="create-company__input"
              placeholder="Do you blog? Add it!"
            />
          </div>
          <div className="create-company__input-offering">
            <div id="addOffering" className="create-company__offering">
              Add a Product or Service
            </div>
          </div>
        </div>
        <div className="create-company__required-text">
          * required input field
        </div>
      </div>
      <div className="create-company__controls">
        <ControlButton dark={true} text="Cancel" link="/create-company/step1" />
        <ControlButton dark={false} text="Next" link="/create-company/step2" />
      </div>
    </form>
  );
};

export default CompanyForm2;