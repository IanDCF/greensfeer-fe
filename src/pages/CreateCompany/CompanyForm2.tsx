import "./CreateCompany.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import { BsCamera } from "react-icons/bs";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CompanyForm2 = ({ handleSubmit }: Props) => {
  return (
    <form className="create-company__form" onSubmit={handleSubmit}>
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
              name="headline"
              className="create-company__input"
              placeholder="Give us your best tagline!"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="description">
              description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              className="create-company__input"
              placeholder="What's your mission?"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="email">
              email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="create-company__input"
              placeholder="Your Company Email"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="website">
              website
            </label>
            <input
              id="website"
              type="text"
              name="website"
              className="create-company__input"
              placeholder="Your Company Website"
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
        <ControlButton
          dark={true}
          text="Cancel"
          link="/create-company/step1"
          btnType="link"
        />
        <ControlButton dark={false} text="Create" btnType="submit" />
      </div>
    </form>
  );
};

export default CompanyForm2;
