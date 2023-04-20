import "./FilterBar.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { Link } from "react-router-dom";
import FilterParameter from "../FilterParameter/FilterParameter";
import { RxDividerVertical } from "react-icons/rx";
interface Props {
  handleFilter: (e: React.MouseEvent) => void;
  clearFilter: (e: React.MouseEvent) => void;
}

const FilterBar = ({ handleFilter, clearFilter }: Props) => {
  return (
    <nav className="filter-bar">
      <div className="filter-bar__wrap">
        <Link to="/search-affiliation" className="filter-bar__add-listing">
          <div className="filter-bar__icon">
            <AiOutlinePlus />
          </div>
          <div className="filter-bar__btn-text">Add Listing</div>
        </Link>
        <div className="filter-bar__separator">
          <RxDividerVertical />
        </div>
        {/* <div className="filter-bar__filters-btn">
          <div className="filter-bar__icon">
            <BsFilter />
          </div>
          <div className="filter-bar__btn-text">Filters</div>
        </div> */}
        <div
          className="filter-bar__parameter"
          id="Project"
          onClick={handleFilter}
        >
          <FilterParameter label="Project" filter={handleFilter} />
        </div>
        <div
          className="filter-bar__parameter"
          id="Service"
          onClick={handleFilter}
        >
          <FilterParameter label="Service" filter={handleFilter} />
        </div>
        <div className="filter-bar__parameter" id="Clear" onClick={clearFilter}>
          <FilterParameter label="Clear" filter={handleFilter} />
        </div>
      </div>
    </nav>
  );
};

export default FilterBar;
