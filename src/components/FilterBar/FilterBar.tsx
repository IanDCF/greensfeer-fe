import "./FilterBar.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import FilterParameter from "../FilterParameter/FilterParameter";
const FilterBar = () => {
  return (
    <nav className="filter-bar">
      <div className="filter-bar__wrap">
        <div className="filter-bar__add-listing">
          <div className="filter-bar__icon">
            <AiOutlinePlus />
          </div>
          <div className="filter-bar__btn-text">Add Listing</div>
        </div>
        <div className="filter-bar__filters-btn">
          <div className="filter-bar__icon">
            <BsFilter />
          </div>
          <div className="filter-bar__btn-text">Filters</div>
        </div>
        <div className="filter-bar__parameter">
          <FilterParameter label="Project Type" />
        </div>
        <div className="filter-bar__parameter">
          <FilterParameter label="Service Type" />
        </div>
        <div className="filter-bar__parameter">
          <FilterParameter label="Location" />
        </div>
      </div>
    </nav>
  );
};

export default FilterBar;
