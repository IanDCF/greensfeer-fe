import { ReactElement, useState } from "react";
import "./MarketFilterMenu.scss";
import { ICompany } from "customTypes";

const sectors: string[] = [
  "Which sector are you in?",
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

const MarketFilterMenu = (): ReactElement => {
  const changeHandler = (e: React.FormEvent) => {
    const radio = e.currentTarget as HTMLInputElement;
    setListingType(radio.value);
  };
  const [companies, setCompanies] = useState<ICompany[]>();
  const [compSearch, setCompSearch] = useState<String>();
  const [selectedCompanies, setSelectedCompanies] = useState<ICompany[]>();

  const [locationSearch, setLocationSearch] = useState<String[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<String[]>();

  const [listingType, setListingType] = useState<string>("");
  return (
    <div className="filter-menu">
      <form action="submit">
        <fieldset>
          <legend>Post Type:</legend>
          {/* TODO: add clickhandler that displays proj/service type on radio change */}
          <label htmlFor="Project">
            Project
            <input
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
              type="radio"
              id="Service"
              name="type"
              value={"Service"}
              onChange={changeHandler}
            />
          </label>
        </fieldset>
        {listingType ? (
          listingType === "Project" ? (
            <label htmlFor="type">
              <select id="type">
                <option defaultValue="" disabled>
                  Type
                </option>
                <option value="Broker">Broker</option>
              </select>
            </label>
          ) : (
            "Service list"
          )
        ) : (
          <div>When filtering by Project/Service, refine by type here</div>
        )}
        <fieldset>
          <legend>Select Sectors:</legend>
          {sectors.map((sector) => {
            return (
              <label key={sector}>
                {sector}
                <input type="checkbox" name={sector} />
              </label>
            );
          })}
        </fieldset>
        <fieldset>
          <legend>Search Companies:</legend>
          <input type="text" />
          {/* get all companies, set search input to state, filter companies */}
        </fieldset>
      </form>
      <form
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
      </form>
    </div>
  );
};

export default MarketFilterMenu;
