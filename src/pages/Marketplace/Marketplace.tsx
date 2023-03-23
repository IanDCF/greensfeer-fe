import { useLocation, matchPath } from "react-router-dom";
import "./Marketplace.scss";
import MarketplaceList from "../../components/MarketplaceList/MarketplaceList";
import MarketplaceSelected from "../../components/MarketplaceSelected/MarketplaceSelected";

const Marketplace: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const marketplaceListMatch = matchPath(path, "/marketplace");

  const marketplaceItemSelectedMatch = matchPath(
    location.pathname,
    "/marketplace/item"
  );

  return (
    <section className="marketplace-container">
      {marketplaceItemSelectedMatch && <MarketplaceSelected />}
      {marketplaceListMatch && <MarketplaceList />}
    </section>
  );
};

export default Marketplace;
