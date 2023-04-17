import GreensfeerLogo from "../../assets/logos/greensfeer-logo.png";
import "../Register/Register.scss";
import { MdOutlineErrorOutline } from "react-icons/md";
interface Props {
  handleSubmit: any;
  error: string | null;
}

const SignInForm = ({ handleSubmit, error }: Props) => {
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
        <button className="register__button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
