import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./SearchDropdown.scss";
import { BsDot } from "react-icons/bs";
import displayPic from "../../assets/images/Mohan-muruge.jpg";

interface Props {
  search: string;
  handleSearch: () => void;
}

const SearchDropdown: React.FC<Props> = ({ handleSearch, search }) => {
  const displayPicture: React.CSSProperties = {
    background: `url(${displayPic}) center/cover no-repeat`,
  };

  return (
    <div className="search-dropdown" onClick={handleSearch}>
      <Link to="#" className="search-dropdown__link">
        <div className="search-dropdown__photo" style={displayPicture}></div>
        <div className="search-dropdown__text">
          <div className="search-dropdown__name">{search}</div>
        </div>
        <div className="search-dropdown__separator">
          <BsDot />
        </div>
        <div className="search-dropdown__headline">Project Developer</div>
      </Link>
      <Link to="#" className="search-dropdown__link">
        <div className="search-dropdown__photo">
          <FaUserCircle />
        </div>
        <div className="search-dropdown__text">
          <div className="search-dropdown__name">{search}</div>
        </div>
        <div className="search-dropdown__separator">
          <BsDot />
        </div>
        <div className="search-dropdown__headline">
          Project Developer @ India's Forests
        </div>
      </Link>
    </div>
  );
};

export default SearchDropdown;
