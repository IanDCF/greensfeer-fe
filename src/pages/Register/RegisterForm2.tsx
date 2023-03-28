import { Link } from "react-router-dom";
import GreensfeerLogo from "../../assets/logos/greensfeer-logo.svg";
import "./Register.scss";

interface Props {
  handleSubmit: any;
  isChecked1: boolean;
  handleCheckbox1: (isChecked: boolean) => void;
}

const RegisterInfo = ({ handleSubmit, handleCheckbox1, isChecked1 }: Props) => {
  return (
    <div className="register__wrapper">
      <div className="register__logo">
        <img
          className="register__img"
          src={GreensfeerLogo}
          alt="Greensfeer Logo"
        />
      </div>

      <div className="register__heading">Welcome to Greensfeer!</div>

      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__text">
          <div className="register__input-div">
            <label className="register__label" htmlFor="firstName">
              first name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter first name"
              className="register__input"
            />
          </div>
          <div className="register__input-div">
            <label className="register__label" htmlFor="secondName">
              last name
            </label>
            <input
              id="secondName"
              name="secondName"
              type="text"
              placeholder="Enter last name"
              className="register__input"
            />
          </div>
          <div className="register__input-div">
            <label className="register__label" htmlFor="role">
              I am a
            </label>
            <select id="role" name="role" className="register__input">
              <option defaultValue={"Tell us who you are"}>
                Tell us who you are
              </option>
              <option value="Project Developer">Project Developer</option>
              <option value="Sponsor">Sponsor / Investor</option>
              <option value="Carbon Consultancy">Carbon Consultant</option>
              <option value="Third Party Validator">
                Third-party Validator
              </option>
              <option value="Verification & Validation Body">
                Verification & Validation Body
              </option>
            </select>
          </div>
        </div>

        <div className="register__preferences">
          <div className="register__boxes-push">
            <input
              id="pushNotifications"
              className="register__checkbox"
              type="checkbox"
              checked={isChecked1}
              onChange={(e) => handleCheckbox1(e.target.checked)}
            />
            <label className="register__label-checkbox" htmlFor="captcha">
              Send me push notifications
            </label>
          </div>
        </div>

        <button className="register__button" type="submit">
          Join Greensfeer
        </button>
        {/* <Link to="#" className="register__link">
          Welcome!
        </Link> */}
      </form>
    </div>
  );
};

export default RegisterInfo;
