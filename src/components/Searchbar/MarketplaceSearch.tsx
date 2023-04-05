import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdStorefront } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import "./Searchbar.scss";
import { BsDot } from "react-icons/bs";
import companyLogo from "../../assets/images/placeholder-logo.png";

const MarketplaceSearch = () => {
  const [marketSearch, setMarketSearch] = useState("");
  const [marketSearchResult, setMarketSearchResult] = useState([]);
  const [marketSearchDropdown, setMarketSearchDropdown] = useState(false);

  const handleSearch = () => {
    toggleSearchDropdown();
    setMarketSearch("");
  };

  const toggleSearchDropdown = () => {
    setMarketSearchDropdown(!marketSearchDropdown);
  };

  useEffect(() => {
    if (marketSearch.length > 0) {
      setMarketSearchDropdown(true);
    } else {
      setMarketSearchDropdown(false);
    }
  }, [marketSearch]);

  const logoStyle: React.CSSProperties = {
    background: `url(${companyLogo}) center/cover no-repeat`,
  };
  return (
    <div className="search">
      <MdStorefront className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search Marketplace"
        onChange={(e) => {
          setMarketSearch(e.target.value);
        }}
        value={marketSearch}
      />
      {marketSearchDropdown && (
        <div className="search__dropdown" onClick={handleSearch}>
          <Link to="#" className="search__link">
            <div className="search__photo" style={logoStyle}>
              {/* <img
                src={displayPic}
                alt="User Display Picture"
                className="search__photo-img"
              /> */}
            </div>
            <div className="search__text">
              <div className="search__name">{marketSearch}</div>
            </div>
            <div className="search__separator">
              <BsDot />
            </div>
            <div className="search__listing-type">Coral Reef Restoration</div>
          </Link>
          <Link to="#" className="search__link">
            <div className="search__photo">
              <AiOutlineGlobal />
            </div>
            <div className="search__text">
              <div className="search__name">{marketSearch}</div>
            </div>
            <div className="search__separator">
              <BsDot />
            </div>
            <div className="search__listing-type">Financing & Sponsorship</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MarketplaceSearch;
