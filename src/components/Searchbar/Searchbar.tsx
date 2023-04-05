import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import "./Searchbar.scss";
import { BsDot } from "react-icons/bs";
import displayPic from "../../assets/images/Mohan-muruge.jpg";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchDropdown, setSearchDropdown] = useState(false);

  const handleSearch = () => {
    toggleSearchDropdown();
    setSearch("");
  };

  const toggleSearchDropdown = () => {
    setSearchDropdown(!searchDropdown);
  };

  useEffect(() => {
    if (search.length > 0) {
      setSearchDropdown(true);
    } else {
      setSearchDropdown(false);
    }
  }, [search]);

  const displayPicture: React.CSSProperties = {
    background: `url(${displayPic}) center/cover no-repeat`,
  };

  return (
    <div className="search">
      <GoSearch className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      {searchDropdown && (
        <div className="search__dropdown" onClick={handleSearch}>
          <Link to="#" className="search__link">
            <div className="search__photo" style={displayPicture}>
              {/* <img
                src={displayPic}
                alt="User Display Picture"
                className="search__photo-img"
              /> */}
            </div>
            <div className="search__text">
              <div className="search__name">{search}</div>
            </div>
            <div className="search__separator">
              <BsDot />
            </div>
            <div className="search__headline">Project Developer</div>
          </Link>
          <Link to="#" className="search__link">
            <div className="search__photo">
              <FaUserCircle />
            </div>
            <div className="search__text">
              <div className="search__name">{search}</div>
            </div>
            <div className="search__separator">
              <BsDot />
            </div>
            <div className="search__headline">
              Project Developer @ India's Forests
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
