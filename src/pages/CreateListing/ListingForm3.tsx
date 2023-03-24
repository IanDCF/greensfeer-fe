import "./CreateListing.scss";
import logo from "/assets/logos/greensfeer-logo.png";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";

const ListingForm3 = () => {
  return (
    <form className="create-listing__form">
      {/* Back btn has to change state to display previous page */}
      <div className="create-listing__back-btn">
        <TbArrowBackUp />
      </div>
      <div className="create-listing__logo">
        <img
          src={logo}
          alt="Greensfeer Logo"
          className="create-listing__logo-img"
        />
      </div>
      <div className="create-listing__heading">
        These inputs are optional but highly recommended
      </div>
      <div className="create-listing__input-fields">
        <div className="create-listing__text-input">
          {/* We need conditional rendering here
          depending on whether the state holds a product or a service */}
          <div className="create-listing__input-div">
            <label
              className="create-listing__label-text"
              htmlFor="verificationStandard"
            >
              verification standard
            </label>
            <select
              id="verificationStandard"
              name="verificationStandard"
              className="create-listing__input"
            >
              <option disabled selected>
                Select a standard
              </option>
              <option value="ACR">American Carbon Registry (ACR)</option>
              <option value="BioCarbon">BioCarbon Partners (BCP)</option>
              <option value="CCB">
                Climate, Community and Biodiversity Standards (CCB)
              </option>
              <option value="CCB2">
                Climate, Community and Biodiversity Standards 2.0 (CCB Standards
                2.0)
              </option>
              <option value="CCBCoastal">
                Climate, Community and Biodiversity Standards - Coastal Blue
                Carbon (CCB Standards - CBC)
              </option>
              <option value="CAR">Climate Action Reserve (CAR)</option>
              <option value="CCBSGG">
                The Gold Standard for the Global Goals (GS4GG)
              </option>
              <option value="CCBS">
                The Gold Standard - Climate, Community and Biodiversity
                Standards (GS CCB)
              </option>
              <option value="CERCarbono">CERCarbono</option>
              <option value="FSC">Forest Stewardship Council (FSC)</option>
              <option value="GreenE">Green-e Climate</option>
              <option value="Nori">Nori</option>
              <option value="PlanVivo">Plan Vivo</option>
              <option value="RainforestAlliance">
                Rainforest Alliance Verified
              </option>
              <option value="RA-CCBS">
                The Rainforest Alliance Climate, Community & Biodiversity
                Standards (RA CCB)
              </option>
              <option value="SocialCarbon">Social Carbon</option>
              <option value="TCR">The Climate Registry (TCR)</option>
              <option value="VCS">Verified Carbon Standard (VCS)</option>
              <option value="Verra">Verra</option>
              <option value="UCR">Universal Carbon Registry (UCR)</option>
            </select>
          </div>

          <div className="create-listing__input-div">
            <label className="create-listing__label-text" htmlFor="methodology">
              methodology id
            </label>
            <input
              id="methodology"
              name="methodology"
              type="text"
              className="create-listing__input"
              placeholder="Enter methodology id"
            />
          </div>
          <div className="create-listing__input-div">
            <label className="create-listing__label-text" htmlFor="vintage">
              vintage
            </label>
            <select
              id="vintage"
              name="vintage"
              className="create-listing__input"
            >
              {Array.from({ length: 19 }, (_, i) => 2023 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="create-listing__price-inputs">
            <div className="create-listing__currency">
              <label className="create-listing__label" htmlFor="currency">
                currency
              </label>
              <select
                id="currency"
                name="currency"
                className="create-listing__input"
              >
                <option value={"USD"}>USD ($)</option>
                <option value={"EUR"}>EUR (€)</option>
                <option value={"GBP"}>GBP (£)</option>
                <option value={"JPY"}>JPY (¥)</option>
                <option value={"CAD"}>CAD ($)</option>
                <option value={"AUD"}>AUD ($)</option>
                <option value={"CHF"}>CHF (Fr)</option>
                <option value={"CNY"}>CNY (¥)</option>
              </select>
            </div>

            <div className="create-listing__price">
              <label className="create-listing__label" htmlFor="price">
                price
              </label>
              <div className="create-listing__price-input">
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  className="create-listing__input"
                  placeholder="Per credit"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="create-listing__required-text">
          * required input field
        </div>
      </div>
      <div className="create-listing__controls">
        <ControlButton dark={true} text="Cancel" link="/company" />
        <ControlButton dark={false} text="Post" link="/create-listing/step3" />
      </div>
    </form>
  );
};

export default ListingForm3;
