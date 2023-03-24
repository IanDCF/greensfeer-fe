import "./CreateCompany.scss";
import logo from "/assets/logos/greensfeer-logo.png";
import { BsCamera } from "react-icons/bs";
import ControlButton from "../../components/ControlButtons/ControlButton";

const CompanyForm1 = () => {
  return (
    <form className="create-company__form">
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
            </div>
          </div>
          <div className="create-company__company-banner">
            <div className="create-company__label">banner</div>
            <div className="create-company__icon">
              <BsCamera />
            </div>
          </div>
        </div>
        <div className="create-company__text-input">
          <div className="create-company__input-div">
            <label className="create-company__label-text">company name</label>
            <input
              type="text"
              className="create-company__input"
              placeholder="What do you go by?"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text">sector*</label>
            <input
              type="text"
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
              <option disabled selected>
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
              className="create-company__input"
              placeholder="Where are you located?"
            />
          </div>
        </div>
        <div className="create-company__required-text">
          * required input field
        </div>
      </div>
      <div className="create-company__controls">
        <ControlButton dark={true} text="Cancel" link="/marketplace" />
        <ControlButton dark={false} text="Next" link="/create-company/step2" />
      </div>
    </form>
  );
};

export default CompanyForm1;
