import { useLocation, matchPath } from "react-router-dom";
import "./Marketplace.scss";
import MarketplaceList from "../../components/MarketplaceList/MarketplaceList";
import MarketplaceSelected from "../../components/MarketplaceSelected/MarketplaceSelected";
import allMarketPosts from "../../helpers/allMarketFetcher";
import { useState, useEffect } from "react";
import { IMarketPost } from "customTypes";
import selectMarketPost from "../../helpers/selectedMarketFetcher";

const Marketplace: React.FC = () => {
  const [marketPosts, setMarketPosts] = useState<IMarketPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IMarketPost>();
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const getData = async () => {
      const posts = await allMarketPosts();
      setMarketPosts(posts);
    };
    getData();
  }, []);
  useEffect(
    () => {
      const getPost = async () => {
        const post = await selectMarketPost(
          "623858ea-177a-42a5-b5cd-85befd63960e"
        );
        setSelectedPost(post);
      };
      getPost();
    },
    [
      // once there is a clickhandler run when params update
    ]
  );

  const marketplaceListMatch = matchPath(path, "/marketplace");

  const marketplaceItemSelectedMatch = matchPath(
    location.pathname,
    "/marketplace/item"
  );

  return (
    <section className="marketplace-container">
      {marketplaceItemSelectedMatch && (
        <MarketplaceSelected Post={selectedPost} />
      )}
      {marketplaceListMatch && <MarketplaceList Posts={marketPosts} />}
    </section>
  );
};

export default Marketplace;
