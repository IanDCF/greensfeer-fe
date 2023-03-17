import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GreensfeerLogo from "../../assets/logos/greensfeer-logo.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
interface RegisterFormData {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignIn = () => {
  // const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const passwordInput = e.currentTarget.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(email, password);

    try {
      const currentUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = auth.currentUser;

      if (user) {
        console.log(`User ${currentUser.user.email} logged in successfully`);
        // navigate("/home");
      }
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

        <div className="register__title">Welcome back!</div>

        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__text">
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

          <Link to="#" className="register__link">
            Forgot your email or password?
          </Link>

          <button className="register__button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
