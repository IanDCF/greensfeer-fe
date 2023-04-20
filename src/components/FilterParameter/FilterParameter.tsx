import "./FilterParameter.scss";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
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
      {label === "Clear" && (
        <div className="filter-parameter__icon">
          <AiOutlineClose />
        </div>
      )}
    </div>
  );
};

export default FilterParameter;
