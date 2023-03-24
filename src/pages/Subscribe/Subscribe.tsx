import Logo from "../../components/Logo/Logo";
import "./Subscribe.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SVG from "/assets/images/greensfeer-registration-success.svg";

type SubscribeFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
};

const convertToSubscribeFormInputs = (
  elements: HTMLFormControlsCollection
): SubscribeFormInputs => {
  return {
    firstName: (elements.namedItem("firstName") as HTMLInputElement).value,
    lastName: (elements.namedItem("lastName") as HTMLInputElement).value,
    email: (elements.namedItem("email") as HTMLInputElement).value,
    phone: (elements.namedItem("phone") as HTMLInputElement).value,
    company: (elements.namedItem("company") as HTMLInputElement).value,
  };
};

const SubscribePage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formInputs = convertToSubscribeFormInputs(e.currentTarget.elements);

    if (
      formInputs.firstName === "" ||
      formInputs.lastName === "" ||
      formInputs.email === ""
    ) {
      alert("Please provide your full name and email address to Subscribe.");
    }

    const body = {
      first_name: formInputs.firstName,
      last_name: formInputs.lastName,
      email: formInputs.email,
      phone: formInputs.phone || "",
      company: formInputs.company || "",
    };

    // Handle payload
    axios
      .post(
        "https://px0xjqzx37.execute-api.us-east-1.amazonaws.com/test/users",
        body
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    handleModal();
    setTimeout(() => {
      handleModal();
      navigate("/");
    }, 6000);
  };

  return (
    <div className="subscribe">
      {openModal && (
        <div className="subscribe__success">
          <img src={SVG} alt="Greensfeer Registration Success" />
        </div>
      )}
      <div className="subscribe__logo">
        <Logo to="/" />
      </div>
      <div className="subscribe__wrapper">
        <form className="subscribe__form" onSubmit={handleSubmit}>
          <div className="subscribe__form-title-div">
            <h3 className="subscribe__form-title">Newsletter</h3>
          </div>
          <label className="subscribe__form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            className="subscribe__form-input"
            required
          />
          <label className="subscribe__form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="subscribe__form-input"
            required
          />
          <label className="subscribe__form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@greensfeer.com"
            className="subscribe__form-input"
            required
          />
          <label className="subscribe__form-label" htmlFor="passwordConfirm">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="1-800-333-0000"
            className="subscribe__form-input"
          />
          <label className="subscribe__form-label" htmlFor="password">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company"
            className="subscribe__form-input"
          />
          <button className="subscribe__form-button" type="submit">
            Continue
          </button>
          <a href="mailto:info@greensfeer.com" className="subscribe__form-link">
            Trouble Subscribeing? Contact Us
          </a>
        </form>
      </div>
    </div>
  );
};

export default SubscribePage;
