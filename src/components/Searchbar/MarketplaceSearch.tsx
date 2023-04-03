import { MdStorefront } from "react-icons/md";
import "./Searchbar.scss";

const MarketplaceSearch = () => {
  return (
    <div className="search">
      <MdStorefront className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search Marketplace"
      />
    </div>
  );
};

export default MarketplaceSearch;
