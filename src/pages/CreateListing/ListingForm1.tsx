import "./CreateListing.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: string;
}

const ListingForm1 = ({ handleSubmit, errors }: Props) => {
  return (
    <form className="create-listing__form" onSubmit={handleSubmit}>
      <div className="create-listing__logo">
        <img
          src={logo}
          alt="Greensfeer Logo"
          className="create-listing__logo-img"
        />
      </div>
      <div className="create-listing__heading">Tell us about your offering</div>
      <div className="create-listing__input-fields">
        <div className="create-listing__text-input">
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="post_type">
              offering type*
            </label>
            <select
              id="post_type"
              name="post_type"
              className="create-company__input"
            >
              <option hidden={true} defaultValue={""}>
                Select an option
              </option>
              <option value="Product">Project</option>
              <option value="Service">Service</option>
            </select>
          </div>
          <div className="create-listing__input-div">
            <label className="create-listing__label-text" htmlFor="post_name">
              title*
            </label>
            <input
              id="post_name"
              name="post_name"
              type="text"
              className="create-listing__input"
              placeholder="Title of your listing"
            />
          </div>
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="sector">
              sector*
            </label>
            <select id="sector" name="sector" className="create-company__input">
              {/* FIXME: Back end currently does not handle sector */}
              <option hidden={true} defaultValue={""}>
                Select a sector
              </option>
              <option value="All">All</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Aviation and Shipping">
                Aviation and Shipping
              </option>
              <option value="Biodiversity Conservation">
                Biodiversity Conservation
              </option>
              <option value="Blue Carbon">
                Blue Carbon (CO2 sequestration in marine and coastal ecosystems)
              </option>
              <option value="Building and Construction">
                Building and Construction
              </option>
              <option value="Carbon Capture and Storage">
                Carbon Capture and Storage (CCS)
              </option>
              <option value="Circular Economy">Circular Economy</option>
              <option value="Distributed Energy">Distributed Energy</option>
              <option value="Ecotourism">Ecotourism</option>
              <option value="Energy Efficiency">Energy Efficiency</option>
              <option value="Energy Storage">Energy Storage</option>
              <option value="Forestry">Forestry</option>
              <option value="Industrial Processes and Manufacturing">
                Industrial Processes and Manufacturing
              </option>
              <option value="Land Use and Conservation">
                Land Use and Conservation
              </option>
              <option value="Other">
                Other (including education, research and development, advocacy,
                and public awareness campaigns)
              </option>
              <option value="REDD+">
                REDD+ (Reducing Emissions from Deforestation and Forest
                Degradation)
              </option>
              <option value="Renewable Energy">Renewable Energy</option>

              <option value="Social and Community Development">
                Social and Community Development
              </option>
              <option value="Transportation">Transportation</option>
              <option value="Waste Management">Waste Management</option>
              <option value="Water Treatment and Supply">
                Water Treatment and Supply
              </option>
              <option value="Climate Adaptation and Resilience">
                Climate Adaptation and Resilience
              </option>
            </select>
          </div>

          <div className="create-listing__input-div-textarea">
            <label className="create-listing__label-text" htmlFor="description">
              description
            </label>
            <textarea
              id="description"
              name="description"
              className="create-listing__input-textarea"
              placeholder="Tell us about your listing"
            />
          </div>
        </div>
      </div>
      <div className="create-listing__required-text">
        * required input field
      </div>
      <div className="create-listing__error">{errors}</div>
      <div className="create-listing__controls">
        <ControlButton
          dark={true}
          text="Cancel"
          link="/company"
          btnType="link"
        />
        <ControlButton
          dark={false}
          text="Next"
          link="/create-listing/step2"
          btnType="submit"
        />
      </div>
    </form>
  );
};

export default ListingForm1;
