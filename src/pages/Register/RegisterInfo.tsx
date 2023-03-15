import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GreensfeerLogo from "../../assets/logos/greensfeer-logo.svg";
import "./Register.scss";
import { auth } from "../../firebase/firebase";
import axios from "axios";

interface RegisterFormData {
  firstName: string;
  lastName: string;
  role: string;
}

const RegisterInfo = () => {
  // const navigate = useNavigate();
  const [isChecked1, setIsChecked1] = useState(false);

  const handleCheckbox1 = (isChecked: boolean) => {
    setIsChecked1(isChecked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstNameInput = e.currentTarget.elements.namedItem(
      "firstName"
    ) as HTMLInputElement;
    const lastNameInput = e.currentTarget.elements.namedItem(
      "lastName"
    ) as HTMLInputElement;
    const roleInput = e.currentTarget.elements.namedItem(
      "role"
    ) as HTMLInputElement;

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const role = roleInput.value;

    console.log(firstName, lastName, role);

    try {
      // Define the payload for the API call
      const payload = {};

      // Make the API call using axios ** when user_route is ready
      // const response = await axios.post("https://example.com/api", payload);

      // Navigate to next page
      // navigate("/register_info");

      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__logo">
          <img
            className="register__img"
            src={GreensfeerLogo}
            alt="Greensfeer Logo"
          />
        </div>

        <div className="register__title">Welcome to Greensfeer!</div>

        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__text">
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
            <label className="register__label" htmlFor="lastName">
              last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter last name"
              className="register__input"
            />
            <label className="register__label" htmlFor="role">
              role
            </label>
            <input
              id="role"
              name="role"
              type="text"
              placeholder="Tell us who you are"
              className="register__input"
            />
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
          <Link to="#" className="register__link">
            Welcome!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterInfo;
