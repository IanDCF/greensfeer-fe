import { useLocation, matchPath } from "react-router-dom";
import "./Marketplace.scss";
import MarketplaceList from "../../components/MarketplaceList/MarketplaceList";
import MarketplaceSelected from "../../components/MarketplaceSelected/MarketplaceSelected";
import allMarketPosts from "../../helpers/allMarketFetcher";
import { useState, useEffect } from "react";
import { IMarketPost } from "customTypes";

const Marketplace: React.FC = () => {
  const [marketPosts, setMarketPosts] = useState<IMarketPost[]>([]);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const getData = async () => {
      const posts = await allMarketPosts();
      setMarketPosts(posts);
    };
    getData();
  }, []);

  const marketplaceListMatch = matchPath(path, "/marketplace");

  const marketplaceItemSelectedMatch = matchPath(
    location.pathname,
    "/marketplace/item"
  );

  return (
    <section className="marketplace-container">
      {marketplaceItemSelectedMatch && <MarketplaceSelected />}
      {marketplaceListMatch && <MarketplaceList Posts={marketPosts} />}
    </section>
  );
};

export default Marketplace;
