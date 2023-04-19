import "./FilterParameter.scss";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  label: string;
  filter: (e: React.MouseEvent) => void;
}

const FilterParameter: React.FC<Props> = ({ label, filter }) => {
  return (
    <div className="filter-parameter" onClick={filter}>
      <div className="filter-parameter__label" id="label">
        {label}
      </div>
    </div>
  );
};

export default FilterParameter;
