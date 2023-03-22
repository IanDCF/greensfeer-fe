import { MdStorefront } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import "./MarketplaceSearch.scss";

const MarketplaceSearch = () => {
  return (
    <div className="marketsearch-container">
      <div className="marketsearch">
        <MdStorefront className="marketsearch__icon" />
        <input
          className="marketsearch__input"
          type="text"
          placeholder="Search Marketplace"
        />
      </div>
      <div className="marketsearch__filter-icon">
        <IoFilterSharp />
      </div>
    </div>
  );
};

export default MarketplaceSearch;
