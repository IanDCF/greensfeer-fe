import "./FilterParameter.scss";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  label: string;
}

const FilterParameters: React.FC<Props> = ({ label }) => {
  return (
    <div className="filter-parameter">
      <div className="filter-parameter__label">{label}</div>
      <div className="filter-parameter__icon">
        <BsChevronDown />
      </div>
    </div>
  );
};

export default FilterParameters;
