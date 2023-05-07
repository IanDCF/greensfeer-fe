import { FormEvent, ReactElement, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import "./MarketFilterMenu.scss";
import { ICompany } from "customTypes";
import getAllCompanies from "../../helpers/allCompanyFetcher";
import ControlButton from "../ControlButtons/ControlButton";
interface Props {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  open:boolean
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

const MarketFilterMenu: React.FC<Props> = ({open, handleSubmit }) => {
  const changeHandler = (e: React.FormEvent) => {
    const radio = e.currentTarget as HTMLInputElement;
    setListingType(radio.value);
  };
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [compSearch, setCompSearch] = useState<string>("");
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [compResult, setCompResult] = useState<ICompany[]>([]);
  const searchResultLength = compResult?.length || 0;
  const getCom = async () => {
    const companies = await getAllCompanies();
    setCompanies(companies);
  };
  useEffect(() => {
    getCom();
  }, []);

  const handleSearch = () => {
    toggleSearchDropdown();
    setCompSearch("");
  };

  const toggleSearchDropdown = () => {
    setSearchDropdown(!searchDropdown);
  };

  useEffect(() => {
    if (compSearch.length > 0) {
      setSearchDropdown(true);
      setCompResult(
        companies?.filter((company) => {
          const regex = new RegExp(`${compSearch}`, "i");
          const match = (nameStr: string | undefined) => {
            if (nameStr?.match(regex)) return true;
          };
          if (
            "company_name" in company &&
            match(company.company_name)
            // first name match || last name match || name match
          )
            return true;
        })
      );
    } else {
      setSearchDropdown(false);
    }
  }, [compSearch]);
  //   const [selectedCompanies, setSelectedCompanies] = useState<ICompany[]>();

  //   const [locationSearch, setLocationSearch] = useState<String[]>([]);
  //   const [selectedLocations, setSelectedLocations] = useState<String[]>();

  const [listingType, setListingType] = useState<string>("");
  if(!open) return <></>;
  return (
    <div className="modal">
        <div className="modal__card">
      <div className="filter-menu">
        <form action="submit" onSubmit={handleSubmit}>
          <fieldset className="post_type">
            <legend>Post Type:</legend>
            <label htmlFor="Project">
              Project
              <input
                //   className="post_type"
                type="radio"
                id="Project"
                name="type"
                value={"Project"}
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="Service">
              Service
              <input
                //   className="post_type"
                type="radio"
                id="Service"
                name="type"
                value={"Service"}
                onChange={changeHandler}
              />
            </label>
          </fieldset>
          <fieldset className="sector">
            <legend>Select Sectors:</legend>
            {sectors.map((sector) => {
              return (
                <label key={sector}>
                  {sector}
                  <input
                    type="checkbox"
                    name={sector}
                    value={sector}
                    //   className="sector"
                  />
                </label>
              );
            })}
          </fieldset>
          {listingType ? (
            listingType === "Project" ? (
              <fieldset className="post_category">
                <legend>Project types:</legend>
                {projtypes.map((proj) => {
                  return (
                    <label key={proj}>
                      {proj}
                      <input
                        type="checkbox"
                        name={proj}
                        value={proj}
                        //   className="post_category"
                      />
                    </label>
                  );
                })}
              </fieldset>
            ) : (
              <fieldset className="post_category">
                <legend>Service types:</legend>
                {servtype.map((serv) => {
                  return (
                    <label key={serv}>
                      {serv}
                      <input
                        type="checkbox"
                        name={serv}
                        value={serv}
                        //   className="post_category"
                      />
                    </label>
                  );
                })}
              </fieldset>
            )
          ) : (
            <div>When filtering by Project/Service, refine by type here</div>
          )}
          <div>
            <legend>Search Companies:</legend>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setCompSearch(e.target.value);
              }}
              value={compSearch}
            />
            {/* get all companies, set search input to state, filter companies */}
          </div>
          {searchDropdown && searchResultLength > 0 && (
            <div className="search__dropdown" onClick={handleSearch}>
              {compResult?.map((profile: ICompany) => {
                return (
                  <div key={profile.company_id} className="search__link">
                    {profile.logo ? (
                      <img className="search__photo" src={`${profile.logo}`} />
                    ) : (
                      <div className="search__photo">
                        <FaUserCircle />
                      </div>
                    )}
                    <div className="search__text">
                      {
                        <div className="search__name">
                          {profile.company_name}
                        </div>
                      }
                    </div>
                    <div className="search__separator">
                      <BsDot />
                    </div>
                    <div className="search__headline">Company</div>
                    <div className="search__separator">
                      <BsDot />
                    </div>
                    <div className="search__headline">{profile?.sector}</div>
                  </div>
                );
              })}
            </div>
          )}
          <ControlButton dark={false} text="Apply" btnType="submit" />
          {/* ensure each selected companay has classname="company_name" */}
        </form>
        {/* <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          const location = e.currentTarget.elements.namedItem(
            "search"
          ) as HTMLInputElement;
          // e.
          console.log(location.value);
          location && setLocationSearch([location?.value, ...locationSearch]);
        }}
      >
        <fieldset>
          <legend>Search Locations:</legend>
          <input id="filter-menu__location" name="search" type="search" />
          <button type="submit">Add to filters</button>
          {locationSearch
            ? locationSearch.map((filter, i) => {
                return <div key={i}>{filter}</div>;
              })
            : ""}
        </fieldset>
      </form> */}
      </div>
    </div>
     </div>
  );
};

export default MarketFilterMenu;
