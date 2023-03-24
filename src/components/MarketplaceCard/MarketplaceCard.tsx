import { IMarketPost } from "customTypes";
import "./MarketplaceCard.scss";
interface Post {
  Post?: IMarketPost;
}

const MarketplaceCard: React.FC<Post> = ({ Post }) => {
  return (
    <div className="marketplace-card">
      <div className="marketplace-card__details">
        <div className="marketplace-card__post-type">{Post?.post_type}</div>
        <div className="marketplace-card__post-name">{Post?.post_name}</div>
        <div className="marketplace-card__company-name">
          {Post?.company_id}Company Name
        </div>
        <div className="marketplace-card__location">
          {`${Post?.location.city}, ${Post?.location.state_province}, ${Post?.location.country}`}
        </div>
      </div>

      <div className="marketplace-card__markers">
        <div className="marketplace-card__badges">
          <div className="marketplace-card__badge"></div>
          <div className="marketplace-card__badge"></div>
          <div className="marketplace-card__badge"></div>
        </div>
        <div className="marketplace-card__price">
          {Post?.p ? `\$${Post?.p?.price_per_credit}` : "Contact for pricing"}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceCard;
