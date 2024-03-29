import GreensfeerLogo from "../../assets/logos/greensfeer-logo.png";
import "./Register.scss";
import { MdOutlineErrorOutline } from "react-icons/md";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isChecked1: boolean;
  handleCheckbox1: (isChecked: boolean) => void;
  isChecked2: boolean;
  handleCheckbox2: (isChecked: boolean) => void;
  error: null | string;
}

const RegisterForm1 = ({
  handleSubmit,
  handleCheckbox1,
  handleCheckbox2,
  isChecked1,
  isChecked2,
  error,
}: Props) => {
  return (
    <div className="register__wrapper">
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
            <label className="register__label" htmlFor="email">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
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
              placeholder="Enter a strong password"
              className="register__input"
            />
          </div>
          <div className="register__input-div">
            <label className="register__label" htmlFor="passwordConfirm">
              confirm password
            </label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="Confirm your password"
              className="register__input"
            />
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
        </div>

        <div className="register__preferences">
          <div className="register__boxes">
            <input
              id="captcha"
              className="register__checkbox"
              type="checkbox"
              checked={isChecked1}
              onChange={(e) => handleCheckbox1(e.target.checked)}
            />
            <label className="register__label-checkbox" htmlFor="captcha">
              I am not an AI bot
            </label>
          </div>

          <div className="register__boxes">
            <input
              id="newsBox"
              className="register__checkbox"
              type="checkbox"
              checked={isChecked2}
              onChange={(e) => handleCheckbox2(e.target.checked)}
            />
            <label className="register__label-checkbox" htmlFor="newsBox">
              I'd like to subscribe to Greensfeer's newsletter
            </label>
          </div>
        </div>

        <button className="register__button" type="submit">
          Get Started
        </button>
        {/* <Link to="#" className="register__link">
          Already have an account? Sign in
        </Link> */}
      </form>
    </div>
  );
};

export default RegisterForm1;
