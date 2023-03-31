import { Link } from "react-router-dom";
import GreensfeerLogo from "../../assets/logos/greensfeer-logo.svg";
import "../Register/Register.scss";

interface Props {
  handleSubmit: any;
}

const SignInForm = ({ handleSubmit }: Props) => {
  return (
    <div className="register__wrapper">
      <div className="register__logo">
        <img
          className="register__img"
          src={GreensfeerLogo}
          alt="Greensfeer Logo"
        />
      </div>

      <div className="register__heading">Welcome back!</div>

      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__text">
          <div className="register__input-div">
            <label className="register__label" htmlFor="email">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              className="register__input"
            />
          </div>
          <div className="register__input-div">
            <label className="register__label" htmlFor="password">
              password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              className="register__input"
            />
          </div>
        </div>

        <button className="register__button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
