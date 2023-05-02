import { ReactElement } from "react";
import "./MarketFilterMenu.scss";

const sectors:string[] =[

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
"Other"
]

const MarketFilterMenu = (): ReactElement => {
  return (
    <div className="filter-menu">
      <form action="submit">
        <fieldset>
          <legend>Post Type:</legend>
          {/* TODO: add clickhandler that displays proj/service type on radio change */}
          <label htmlFor="Project">
            Project
            <input type="radio" id="Project" value={"Project"} />
          </label>
          <label htmlFor="Service">
            Service
            <input type="radio" id="Service" value={"Service"} />
          </label>
        </fieldset>
        <label htmlFor="type">
            <select id="type">
                <option defaultValue="" disabled>
                    Type
                </option>
                <option value="Broker">Broker</option>
            </select>
        </label>
        <fieldset>
            <legend>Sector</legend>
{sectors.map(sector=>{
    return(
        <label key={sector}>{sector}
            <input type="checkbox" name={sector}/>
        </label>
    )
})}
        </fieldset>
      </form>
    </div>
  );
};

export default MarketFilterMenu;
