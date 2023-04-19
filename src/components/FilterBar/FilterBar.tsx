import "./FilterBar.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { Link } from "react-router-dom";
import FilterParameter from "../FilterParameter/FilterParameter";
import { RxDividerVertical } from "react-icons/rx";
interface Props {
  clickHandler: (e: React.MouseEvent) => void;
}
const FilterBar = ({ clickHandler }: Props) => {
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
        <div className="filter-bar__filters-btn">
          <div className="filter-bar__icon">
            <BsFilter />
          </div>
          <div className="filter-bar__btn-text">Filters</div>
        </div>
        <div className="filter-bar__parameter" id="Project"onClick={clickHandler}>
          <FilterParameter label="Project" />
        </div>
        <div className="filter-bar__parameter" id="Service"onClick={clickHandler}>
          <FilterParameter label="Service" />
        </div>
        <div className="filter-bar__parameter">
          <FilterParameter label="Location" />
        </div>
      </div>
    </nav>
  );
};

export default FilterBar;
