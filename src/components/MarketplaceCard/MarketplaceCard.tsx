import { IMarketPost } from "customTypes";
import "./MarketplaceCard.scss";
import { MouseEventHandler } from "react";
interface Post {
  Post?: IMarketPost;
  clickHandler?: () => void;
  urlHandler?: (listingId: string) => void;
  listingId: string;
}

const MarketplaceCard: React.FC<Post> = ({
  Post,
  clickHandler,
  urlHandler,
  listingId,
}) => {
  const handleClick = () => {
    clickHandler && clickHandler();
    urlHandler && urlHandler(listingId);
  };
  return (
    <div className="marketplace-card" onClick={() => handleClick()}>
      <div className="marketplace-card__details">
        <div className="marketplace-card__post-type">{Post?.post_type}</div>
        <div className="marketplace-card__post-name">{Post?.post_name}</div>
        <div className="marketplace-card__company-name">
          Company Name Fix Required
        </div>
        <div className="marketplace-card__location">{`${Post?.location}`}</div>
      </div>

      <div className="marketplace-card__markers">
        <div className="marketplace-card__badges">
          <div className="marketplace-card__badge"></div>
          <div className="marketplace-card__badge"></div>
          <div className="marketplace-card__badge"></div>
        </div>
        <div className="marketplace-card__price">
          {Post?.post_type === "Project" &&
            `\$${Post?.p?.price_per_credit} / tCO2`}
          {Post?.post_type === "Service" && "Ian Del Carpio"}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceCard;
