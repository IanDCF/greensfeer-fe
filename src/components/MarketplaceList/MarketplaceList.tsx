import { IMarketPost } from "customTypes";
import MarketplaceCard from "../MarketplaceCard/MarketplaceCard";
import "./MarketplaceList.scss";
interface MarketProps {
  Posts?: IMarketPost[];
}

const MarketplaceList: React.FC<MarketProps> = ({ Posts }) => {
  return (
    <section className="marketplace-list">
      {Posts
        ? Posts[0]
          ? Posts.map((post) => (
              <MarketplaceCard key={post.market_post_id} Post={post} />
            ))
          : "small loading"
        : "loading"}
    </section>
  );
};

export default MarketplaceList;
