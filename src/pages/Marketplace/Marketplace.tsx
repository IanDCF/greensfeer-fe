import { useLocation } from "react-router-dom";
import "./Marketplace.scss";
import MarketplaceList from "../../components/MarketplaceList/MarketplaceList";
import MarketplaceSelected from "../../components/MarketplaceSelected/MarketplaceSelected";

const Marketplace: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <section className="marketplace-container">
      {path === "/marketplace" && <MarketplaceList />}
      {path === "/marketplace/item" && <MarketplaceSelected />}
    </section>
  );
};

export default Marketplace;
