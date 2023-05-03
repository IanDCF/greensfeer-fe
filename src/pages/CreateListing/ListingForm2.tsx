import "./CreateListing.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { TbArrowBackUp } from "react-icons/tb";
import { MdOutlineErrorOutline } from "react-icons/md";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  clickHandler: () => void;
  errors: string;
  company: string;
  listingType: string;
}

const ListingForm2 = ({
  handleSubmit,
  clickHandler,
  errors,
  company,
  listingType,
}: Props) => {
  return (
    <form className="create-listing__form" onSubmit={handleSubmit}>
      {/* Back btn has to change state to display previous page */}
      <div onClick={clickHandler} className="create-company__back-btn">
        <TbArrowBackUp />
      </div>
      <div className="create-listing__logo">
        <img
          src={logo}
          alt="Greensfeer Logo"
          className="create-listing__logo-img"
        />
      </div>
      <div className="create-listing__heading">You're almost there</div>
      <div className="create-listing__input-fields">
        <div className="create-listing__text-input">
          {/* We need conditional rendering here
          depending on whether the state holds a product or a service */}
          {listingType === "Project" && (
            <div className="create-company__input-div">
              <label
                className="create-company__label-text"
                htmlFor="project_type"
              >
                project type*
              </label>
              <select
                id="project_type"
                name="project_type"
                className="create-company__input"
                defaultValue={"Select Project Type"}
              >
                <option hidden={true} defaultValue={undefined}>
                  Select Project Type
                </option>
                <option disabled>Project Types:</option>
                <option value="Agroforestry">Agroforestry</option>
                <option value="Biomass Energy Generation">
                  Biomass Energy Generation
                </option>
                <option value="Blue Carbon">
                  Blue Carbon (CO2 sequestration in marine and coastal
                  ecosystems)
                </option>
                <option value="Carbon Capture & Storage">
                  Carbon Capture and Storage
                </option>
                <option value="Forest Conservation & Management">
                  Forest Conservation and Management
                </option>
                <option value="Landfill Gas Capture & Utilization">
                  Landfill Gas Capture and Utilization
                </option>
                <option value="Methane Capture & Utilization">
                  Methane Capture and Utilization
                </option>
                <option value="REDD+">
                  REDD+ (Reducing Emissions from Deforestation and Forest
                  Degradation)
                </option>
                <option value="Reforestation & Afforestation">
                  Reforestation and Afforestation
                </option>
                <option value="Soil Conservation & Erosion Control">
                  Soil Conservation and Erosion Control
                </option>
                <option value="Sustainable Agriculture & Farming">
                  Sustainable Agriculture and Farming
                </option>
                <option value="Renewable Energy Installations">
                  Renewable Energy Installations (such as wind, solar, hydro,
                  and geothermal)
                </option>
                <option disabled>Program Types:</option>
                <option value="Agricultural Soil Carbon Sequestration">
                  Agricultural Soil Carbon Sequestration
                </option>
                <option value="Afforestation & Reforestation">
                  Afforestation and Reforestation
                </option>
                <option value="Building Energy Efficiency">
                  Building Energy Efficiency
                </option>
                <option value="Carbon Offset Programs">
                  Carbon Offset Programs
                </option>
                <option value="Energy Efficiency">
                  Energy Efficiency (such as replacing high-carbon energy
                  sources with low-carbon ones)
                </option>
                <option value="Fuel Switching">Fuel Switching</option>
                <option value="Green Transportation">
                  Green Transportation
                </option>
                <option value="Landfill Gas-to-Energy">
                  Landfill Gas-to-Energy
                </option>
                <option value="Livestock Methane Reduction">
                  Livestock Methane Reduction
                </option>
                <option value="Renewable Energy">
                  Renewable Energy (such as solar, wind, and geothermal energy)
                </option>
                <option value="Waste-to-Energy">Waste-to-Energy</option>
              </select>
            </div>
          )}

          {listingType === "Service" && (
            <div className="create-company__input-div">
              <label
                className="create-company__label-text"
                htmlFor="service_type"
              >
                service type*
              </label>
              <select
                id="service_type"
                name="service_type"
                className="create-company__input"
                defaultValue={"Select Service Type"}
              >
                <option hidden={true} defaultValue={undefined}>
                  Select Service Type
                </option>
                <option value="API Provider">API Provider</option>
                <option value="Broker">Broker</option>
                <option value="Carbon Offset Consulting">
                  Carbon Offset Consulting
                </option>
                <option value="Credit Rating Provider">
                  Credit Rating Provider
                </option>
                <option value="Exchange">Exchange</option>
                <option value="Financing & Sponsorship">
                  Financing & Sponsorship
                </option>
                <option value="Governance & Accreditation">
                  Governance & Accreditation
                </option>
                <option value="Insurance">Insurance</option>
                <option value="Market Research & Data Platform">
                  Market Research & Data Platform
                </option>
                <option value="Marketplace">Marketplace</option>
                <option value="Measuring, Reporting, & Verification">
                  Measuring, Reporting, & Verification
                </option>
                <option value="Project Developers & Aggregator">
                  Project Developers & Aggregator
                </option>
                <option value="Software as a Service">
                  Software as a Service (SaaS)
                </option>
                <option value="Third-Party Auditor">Third-Party Auditor</option>
                <option value="Verification & Validation Body">
                  Verification & Validation Body
                </option>
              </select>
            </div>
          )}

          <div className="create-listing__input-div">
            <label className="create-listing__label-text" htmlFor="location">
              location*
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="create-listing__input"
              placeholder="Where do you operate?"
            />
          </div>
          <div className="create-listing__input-div">
            <label className="create-listing__label-text" htmlFor="link">
              link
            </label>
            <input
              id="link"
              name="link"
              type="text"
              className="create-listing__input"
              placeholder="Share a reference link"
            />
          </div>
        </div>
        <div className="create-listing__required-text">
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
      <div className="create-listing__controls">
        <ControlButton
          btnType="link"
          dark={true}
          text="Cancel"
          link={`/company/${company}`}
        />

        <ControlButton
          dark={false}
          btnType="submit"
          text={listingType === "Project" ? "Next" : "Done"}
        />
      </div>
    </form>
  );
};

export default ListingForm2;
