import "./CreateListing.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  clickHandler: () => void;
  company: string;
}
const ListingForm3 = ({ handleSubmit, clickHandler, company }: Props) => {
  return (
    <form className="create-listing__form" onSubmit={handleSubmit}>
      {/* Back btn has to change state to display previous page */}
      <div onClick={clickHandler} className="create-listing__back-btn">
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
              htmlFor="verification_standard"
            >
              verification standard
            </label>
            <select
              id="verification_standard"
              name="verification_standard"
              className="create-listing__input"
              defaultValue={"Select a Standard"}
            >
              <option hidden={true} defaultValue={undefined}>
                Select a Standard
              </option>
              <option value="American Carbon Registry">
                American Carbon Registry
              </option>
              <option value="Climate, Community and Biodiversity Standards">
                Climate, Community and Biodiversity Standards
              </option>
              {/* <option value="CCBCoastal">
                Climate, Community and Biodiversity Standards - Coastal Blue
                Carbon (CCB Standards - CBC)
              </option> */}
              <option value="Climate Action Reserve">
                Climate Action Reserve
              </option>
              <option value="Gold Standard">Gold Standard</option>
              <option value="Cercarbono">Cercarbono</option>
              <option value="Forest Stewardship Council">
                Forest Stewardship Council (FSC)
              </option>
              <option value="Green-e">Green-e</option>
              <option value="Plan Vivo">Plan Vivo</option>
              <option value="Rainforest Alliance">Rainforest Alliance</option>
              <option value="Social Carbon">Social Carbon</option>
              <option value="The Climate Registry">The Climate Registry</option>
              <option value="Verified Carbon Standard">
                Verified Carbon Standard
              </option>
              <option value="Verra">Verra</option>
              <option value="Universal Carbon Registry">
                Universal Carbon Registry
              </option>
            </select>
          </div>

          <div className="create-listing__input-div">
            <label
              className="create-listing__label-text"
              htmlFor="methodology_id"
            >
              methodology id
            </label>
            <input
              id="methodology_id"
              name="methodology_id"
              type="text"
              className="create-listing__input"
              placeholder="Enter methodology id"
            />
          </div>
          <div className="create-listing__input-div">
            {/* FIXME: current back end design doesn't have place for vintage_year */}
            <label
              className="create-listing__label-text"
              htmlFor="vintage_year"
            >
              vintage
            </label>
            <select
              id="vintage_year"
              name="vintage_year"
              className="create-listing__input"
              defaultValue={"Select year"}
            >
              <option hidden={true} defaultValue={undefined}>
                Select year
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
            </select>
          </div>
          <div className="create-listing__price-inputs">
            <div className="create-listing__currency">
              {/* FIXME: current back end does not have field for currency */}
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
              <label
                className="create-listing__label"
                htmlFor="price_per_credit"
              >
                price
              </label>
              <div className="create-listing__price-input">
                <input
                  id="price_per_credit"
                  name="price_per_credit"
                  type="number"
                  step="0.01"
                  min="0"
                  className="create-listing__input"
                  placeholder="Per tCO2"
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
        <ControlButton
          dark={true}
          text="Cancel"
          link={`/company/${company}`}
          btnType="link"
        />
        <ControlButton dark={false} text="Post" btnType="submit" />
      </div>
    </form>
  );
};

export default ListingForm3;
