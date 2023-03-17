import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GreensfeerLogo from "../../assets/logos/greensfeer-logo.svg";
import "./RegisterInfo.scss";
import { auth } from "../../firebase/firebase";
import axios from "axios";

interface Props {
  handleSubmit: any;
  isChecked1: boolean;
  handleCheckbox1: (isChecked: boolean) => void;
}
const RegisterInfo = ({ handleSubmit, handleCheckbox1, isChecked1 }: Props) => {
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
