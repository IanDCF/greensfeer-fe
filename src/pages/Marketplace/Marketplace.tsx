import MarketplaceList from "../../components/MarketplaceList/MarketplaceList";
import MarketplaceControls from "../../components/MarketplaceControls/MarketplaceControls";
import "./Marketplace.scss";

const Marketplace = () => {
  return (
    <section className="marketplace-container">
      <MarketplaceList />
    </section>
  );
};

export default Marketplace;
