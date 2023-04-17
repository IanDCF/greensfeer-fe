import "./CreateCompany.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import { BsCamera } from "react-icons/bs";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdOutlineErrorOutline } from "react-icons/md";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handlePic: (e: React.FormEvent<HTMLInputElement>) => void;
  handleBanner: (e: React.FormEvent<HTMLInputElement>) => void;
  isChecked1: boolean;
  handleCheckbox1: (isChecked: boolean) => void;
  errors: string;
  profileUrl: string;
  bannerUrl: string;
}

const CompanyForm1 = ({
  handleSubmit,
  handlePic,
  handleBanner,
  handleCheckbox1,
  isChecked1,
  errors,
  profileUrl,
  bannerUrl,
}: Props) => {
  // FIXME: update to controlled form inputs; set to state so values are not missing on submit
  return (
    <form className="create-company__form" onSubmit={handleSubmit}>
      <div className="create-company__logo">
        <img
          src={logo}
          alt="Greensfeer Logo"
          className="create-company__logo-img"
        />
      </div>
      <div className="create-company__heading">
        Let's get your company page up and running!
      </div>
      <div className="create-company__input-fields">
        <div className="create-company__img-upload">
          <div className="create-company__company-logo">
            {profileUrl && (
              <div className="create-company__upload-check">
                <BsFillCheckCircleFill />
              </div>
            )}
            <div className="create-company__label">logo</div>
            <div className="create-company__icon">
              <BsCamera />
              <label htmlFor="logo"></label>
            </div>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handlePic}
              style={{ opacity: 0 }}
              className="create-company__input-file"
            />
          </div>
          <div className="create-company__company-banner">
            {bannerUrl && (
              <div className="create-company__upload-check">
                <BsFillCheckCircleFill />
              </div>
            )}
            <div className="create-company__label">banner</div>
            <div className="create-company__icon">
              <BsCamera />
              <label htmlFor="banner"></label>
            </div>
            <input
              type="file"
              name="banner"
              onChange={handleBanner}
              accept="image/*"
              style={{ opacity: 0 }}
              className="create-company__input-file"
            />
          </div>
        </div>
        <div className="create-company__text-input">
          <div className="create-company__input-div">
            <label className="create-company__label-text">company name*</label>
            <input
              type="text"
              name="name"
              className="create-company__input"
              placeholder="Enter company name"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text">sector*</label>
            <select id="sector" name="sector" className="create-company__input">
              <option defaultValue={"Null"} selected disabled>
                Which sector are you in?
              </option>
              <option value="Various Sectors">Various Sectors</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Aviation & Shipping">Aviation and Shipping</option>
              <option value="Biodiversity Conservation">
                Biodiversity Conservation
              </option>
              <option value="Blue Carbon">
                Blue Carbon (CO2 sequestration in marine and coastal ecosystems)
              </option>
              <option value="Building & Construction">
                Building and Construction
              </option>
              <option value="Carbon Capture & Storage">
                Carbon Capture and Storage (CCS)
              </option>
              <option value="Circular Economy">Circular Economy</option>
              <option value="Climate Tech">Climate Tech</option>
              <option value="Distributed Energy">Distributed Energy</option>
              <option value="Ecotourism">Ecotourism</option>
              <option value="Energy Efficiency">Energy Efficiency</option>
              <option value="Energy Storage">Energy Storage</option>
              <option value="Forestry">Forestry</option>
              <option value="Industrial Processes & Manufacturing">
                Industrial Processes and Manufacturing
              </option>
              <option value="Land Use & Conservation">
                Land Use and Conservation
              </option>
              <option value="REDD+">
                REDD+ (Reducing Emissions from Deforestation and Forest
                Degradation)
              </option>
              <option value="Renewable Energy">Renewable Energy</option>
              <option value="Social & Community Development">
                Social and Community Development
              </option>
              <option value="Transportation">Transportation</option>
              <option value="Waste Management">Waste Management</option>
              <option value="Water Treatment & Supply">
                Water Treatment and Supply
              </option>
              <option value="Climate Adaptation & Resilience">
                Climate Adaptation and Resilience
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="marketRole">
              market role*
            </label>
            <select
              id="marketRole"
              name="marketRole"
              className="create-company__input"
            >
              <option defaultValue={"Null"} selected disabled>
                Select market role
              </option>
              <option value="Broker">Broker</option>
              <option value="Buyer">Buyer</option>
              <option value="Carbon Consultancy">Carbon Consultancy</option>
              <option value="Credit Assurance">Credit Assurance</option>
              <option value="Exchange">Exchange</option>
              <option value="Legal Advising">Legal Advising</option>
              <option value="Life Cycle Assessment">
                Life Cycle Assessment
              </option>
              <option value="Market Analysis">Market Analysis</option>
              <option value="Offset Fund">Offset Fund</option>
              <option value="Offset Standard Setter">
                Offset Standard Setter
              </option>
              <option value="Policy Maker">Policy Maker</option>
              <option value="Project Aggregator">Project Aggregator</option>
              <option value="Project Developer">Project Developer</option>
              <option value="Project Financing">Project Financing</option>
              <option value="Registry Operator">Registry Operator</option>
              <option value="Retailer">Retailer</option>
              <option value="Risk Management">Risk Management</option>
              <option value="Saas Provider">Saas Provider</option>
              <option value="Seller">Seller</option>
              <option value="Standard Registry">Standard Registry</option>
              <option value="Third Party Auditor">Third Party Auditor</option>
              <option value="Third Party Validator">
                Third Party Validator
              </option>
              <option value="Third Party Verifier">Third Party Verifier</option>
              <option value="Verification & Validation Body">
                Verification & Validation Body
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text">location*</label>
            <input
              type="text"
              name="location"
              className="create-company__input"
              placeholder="Where are you located?"
            />
          </div>
        </div>
        <div className="create-company__required-text">
          * required input field
        </div>
      </div>
      {errors ? (
        <div className="register__error">
          <div className="register__error-icon">
            <MdOutlineErrorOutline />
          </div>
          <div className="register__error-text">{`${errors}`}</div>
        </div>
      ) : (
        ""
      )}
      <div className="create-company__preferences">
        <div className="create-company__boxes">
          <input
            id="representative"
            className="create-company__checkbox"
            type="checkbox"
            name="representative"
            checked={isChecked1}
            onChange={(e) => handleCheckbox1(e.target.checked)}
          />
          <label
            className="create-company__label-checkbox"
            htmlFor="representative"
          >
            I certify that I am an authorized representative of this
            organization
          </label>
        </div>
      </div>
      <div className="create-company__controls">
        <ControlButton
          dark={true}
          text="Back"
          link="/search-company"
          btnType="link"
        />
        <ControlButton dark={false} text="Next" btnType="submit" />
      </div>
    </form>
  );
};

export default CompanyForm1;
