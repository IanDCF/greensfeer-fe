import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GreensfeerLogo from "../../assets/logos/greensfeer-logo.svg";
import "./Register.scss";
import { auth } from "../../firebase/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
interface RegisterFormData {
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register = () => {
  // const navigate = useNavigate();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckbox1 = (isChecked: boolean) => {
    setIsChecked1(isChecked);
  };

  const handleCheckbox2 = (isChecked: boolean) => {
    setIsChecked2(isChecked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const passwordInput = e.currentTarget.elements.namedItem(
      "password"
    ) as HTMLInputElement;
    const passwordConfirmInput = e.currentTarget.elements.namedItem(
      "passwordConfirm"
    ) as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    if (password !== passwordConfirm) {
      alert("Passwords don't match");
      return;
    }

    console.log(email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user_id = userCredential.user.uid;
      const payload = {
        user_id,
        email,
      };

      console.log("User registered successfully:", payload);
      // writeUserData(uid, payload);
      // navigate("/signin");
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode, errorMessage });
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
          <Link to="#" className="register__link">
            Already have an account? Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
