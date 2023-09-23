import GreensfeerLogo from "../../assets/logos/greensfeer-logo.png";
import "./Register.scss";
// import { TbArrowBackUp } from "react-icons/tb";
import { MdOutlineErrorOutline } from "react-icons/md";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isChecked1: boolean;
  handleCheckbox1: (isChecked: boolean) => void;
  error: null | string;
  clickHandler: () => void;
}

const RegisterForm2 = ({
  handleSubmit,
  handleCheckbox1,
  isChecked1,
  error,
  clickHandler,
}: Props) => {
  return (
    <div className="register__wrapper">
      {/* This back arrow should send the user back to the first Form */}
      {/* <div onClick={clickHandler} className="register__back-btn">
        <TbArrowBackUp />
      </div> */}
      <div className="register__logo">
        <img
          className="register__img"
          src={GreensfeerLogo}
          alt="Greensfeer Logo"
        />
      </div>

      <div className="register__heading">Welcome to Greensfeer</div>

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
            <select
              id="role"
              name="role"
              className="register__input"
              defaultValue={"Tell us who you are"}
            >
              <option defaultValue={undefined} disabled>
                Tell us who you are
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
              <option value="Third Party Verifier">Third Party Verifier</option>
              <option value="Spectator">Spectator</option>
            </select>
          </div>
        </div>

        {error ? (
          <div className="register__error">
            <div className="register__error-icon">
              <MdOutlineErrorOutline />
            </div>
            <div className="register__error-text">{`${error}`}</div>
          </div>
        ) : (
          ""
        )}

        <div className="register__preferences">
          <div className="register__boxes-push">
            <input
              id="pushNotifications"
              className="register__checkbox"
              type="checkbox"
              checked={isChecked1}
              onChange={(e) => handleCheckbox1(e.target.checked)}
            />
            <label
              className="register__label-checkbox"
              htmlFor="pushNotifications"
            >
              Send me push notifications
            </label>
          </div>
        </div>

        <button className="register__button" type="submit">
          Join Greensfeer
        </button>
      </form>
    </div>
  );
};

export default RegisterForm2;
