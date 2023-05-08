import { FormEvent, useEffect, useState } from "react";
import "./MarketFilterMenu.scss";
import { ICompany } from "customTypes";
import getAllCompanies from "../../helpers/allCompanyFetcher";
import ControlButton from "../ControlButtons/ControlButton";
interface Props {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  open: boolean;
  handleFilter: (e: React.MouseEvent)=>void
}

const sectors: string[] = [
  "Various Sectors",
  "Agriculture",
  "Aviation and Shipping",
  "Biodiversity Conservation",
  "Blue Carbon (CO2 sequestration in marine and coastal ecosystems)",
  "Building and Construction",
  "Carbon Capture and Storage (CCS)",
  "Circular Economy",
  "Climate Tech",
  "Distributed Energy",
  "Ecotourism",
  "Energy Efficiency",
  "Energy Storage",
  "Forestry",
  "Industrial Processes and Manufacturing",
  "Land Use and Conservation",
  "REDD+ (Reducing Emissions from Deforestation and Forest Degradation)",
  "Renewable Energy",
  "Social and Community Development",
  "Transportation",
  "Waste Management",
  "Water Treatment and Supply",
  "Climate Adaptation and Resilience",
  "Other",
];

const projtypes: string[] = [
  "Agroforestry",
  "Biomass Energy Generation",
  "Blue Carbon",
  "Carbon Capture & Storage",
  "Forest Conservation & Management",
  "Landfill Gas Capture & Utilization",
  "Methane Capture & Utilization",
  "REDD+",
  "Reforestation & Afforestation",
  "Soil Conservation & Erosion Control",
  "Sustainable Agriculture & Farming",
  "Renewable Energy Installations",
  "Program Types:",
  "Agricultural Soil Carbon Sequestration",
  "Afforestation & Reforestation",
  "Building Energy Efficiency",
  "Carbon Offset Programs",
  "Energy Efficiency",
  "Fuel Switching",
  "Green Transportation",
  "Landfill Gas-to-Energy",
  "Livestock Methane Reduction",
  "Renewable Energy",
  "Waste-to-Energy",
];

const servtype: string[] = [
  "API Provider",
  "Broker",
  "Carbon Offset Consulting",
  "Credit Rating Provider",
  "Exchange",
  "Financing & Sponsorship",
  "Governance & Accreditation",
  "Insurance",
  "Market Research & Data Platform",
  "Marketplace",
  "Measuring, Reporting, & Verification",
  "Project Developers & Aggregator",
  "Software as a Service",
  "Third-Party Auditor",
  "Verification & Validation Body",
];

const hideOptions = (e: React.MouseEvent) => {
  e.preventDefault();
  e.currentTarget.classList.toggle("list--hidden");
};

const MarketFilterMenu: React.FC<Props> = ({ open, handleSubmit, handleFilter }) => {
  const changeHandler = (e: React.FormEvent) => {
    const radio = e.currentTarget as HTMLInputElement;
    setListingType(radio.value);
  };
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const getCom = async () => {
    const companies = await getAllCompanies();
    setCompanies(companies);
  };
  useEffect(() => {
    getCom();
  }, []);

  const [listingType, setListingType] = useState<string>("");
  if (!open) return <></>;
  return (
    <div className="modal">
      <div className="modal__card">
        <div className="filter-menu">
          <form action="submit" onSubmit={handleSubmit}>
            <fieldset className="post_type">
              <legend>Post Type:</legend>
              <label className="modal__text" htmlFor="Project">
                <input
                  type="radio"
                  id="Project"
                  name="type"
                  value={"Project"}
                  onChange={changeHandler}
                />
                Project
              </label>
              <label className="modal__text" htmlFor="Service">
                <input
                  type="radio"
                  id="Service"
                  name="type"
                  value={"Service"}
                  onChange={changeHandler}
                />
                Service
              </label>
            </fieldset>
            <fieldset className="sector">
              <legend
                className="modal__text list--hidden"
                onClick={hideOptions}
              >
                Filter by Sector \/
              </legend>
              <div className="list">
                {sectors.map((sector) => {
                  return (
                    <div key={sector} id="list-item">
                      <input type="checkbox" id={sector} value={sector} />
                      <label className="modal__text" htmlFor={sector}>
                        {sector}
                        <br></br>
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
            {listingType ? (
              listingType === "Project" ? (
                <fieldset className="post_category">
                  <legend
                    className="modal__text list--hidden"
                    onClick={hideOptions}
                  >
                    Filter by Project Type \/
                  </legend>
                  <div className="list">
                    {projtypes.map((proj) => {
                      return (
                        <div key={proj}>
                          <input type="checkbox" id={proj} value={proj} />
                          <label className="modal__text" htmlFor={proj}>
                            {proj}
                            <br></br>
                          </label>
                        </div>
                      );
                    })}{" "}
                  </div>
                </fieldset>
              ) : (
                <fieldset className="post_category">
                  <legend
                    className="modal__text list--hidden"
                    onClick={hideOptions}
                  >
                    Filter by Service Type \/
                  </legend>
                  <div className="list">
                    {servtype.map((serv) => {
                      return (
                        <div key={serv}>
                          <input type="checkbox" id={serv} value={serv} />
                          <label className="modal__text" htmlFor={serv}>
                            {serv}
                            <br></br>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </fieldset>
              )
            ) : (
              <div className="modal__text">
                When filtering by Project/Service, refine by type here
              </div>
            )}

            <fieldset className="company_name">
              <legend
                className="modal__text list--hidden"
                onClick={hideOptions}
              >
                Filter by Company \/
              </legend>
              <div className="list">
                {companies?.map((profile: ICompany) => {
                  return (
                    <div key={profile.company_name}>
                      <input
                        type="checkbox"
                        id={profile.company_name}
                        value={profile.company_name}
                      />
                      <label
                        className="modal__text"
                        htmlFor={profile.company_name}
                      >
                        {profile.company_name}
                        <br></br>
                      </label>
                    </div>
                  );
                })}
              </div>
              {/* get all companies, set search input to state, filter companies */}
            </fieldset>
            <div className="create-company__controls">
              <div className="control-btn control-btn--black" onClick={handleFilter}>Cancel</div>
              <ControlButton dark={false} text="Apply" btnType="submit" />
            </div>
            {/* ensure each selected companay has classname="company_name" */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MarketFilterMenu;
