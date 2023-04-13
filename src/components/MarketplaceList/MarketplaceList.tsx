import { IMarketPost } from "customTypes";
import MarketplaceCard from "../MarketplaceCard/MarketplaceCard";
import "./MarketplaceList.scss";
import { MouseEvent, MouseEventHandler } from "react";

interface MarketProps {
  Posts?: IMarketPost[];
  clickHandler?: () => void;
  urlHandler?: (listingId: string) => void;
}

const MarketplaceList: React.FC<MarketProps> = ({
  Posts,
  clickHandler,
  urlHandler,
}) => {
  return (
    <section className="marketplace-list">
      {Posts
        ? Posts[0]
          ? Posts.map((post) => (
              <MarketplaceCard
                key={post.market_post_id}
                Post={post}
                listingId={post.market_post_id}
                clickHandler={clickHandler}
                urlHandler={urlHandler}
              />
            ))
          : "small loading"
        : "loading"}
    </section>
  );
};

export default MarketplaceList;
