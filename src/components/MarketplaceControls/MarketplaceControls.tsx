import "./MarketplaceControls.scss";
import { IoFilterSharp } from "react-icons/io5";
import MarketplaceSearch from "../MarketplaceSearch/MarketplaceSearch";
const MarketplaceControls = () => {
  return (
    <header className="marketplace-controls">
      <div className="marketplace-controls__searchbar">
        <MarketplaceSearch />
      </div>
      <div className="marketplace-controls__btn">
        <div className="marketplace-controls__btn-icon">
          <IoFilterSharp />
        </div>
        <div className="marketplace-controls__btn-text">Filters</div>
      </div>
    </header>
  );
};

export default MarketplaceControls;
