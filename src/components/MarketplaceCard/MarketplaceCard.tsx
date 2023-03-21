import "./MarketplaceCard.scss";

const MarketplaceCard = () => {
  return (
    <div className="marketplace-card">
      <div className="marketplace-card__details">
        <div className="marketplace-card__post-type">Ecological Project</div>
        <div className="marketplace-card__post-name">Great Bear Forestry</div>
        <div className="marketplace-card__company-name">
          Coastal First Nations
        </div>
        <div className="marketplace-card__location">
          Gribbel Island, BC, Canada
        </div>
      </div>

      <div className="marketplace-card__markers">
        <div className="marketplace-card__badges">
          <div className="marketplace-card__badge"></div>
          <div className="marketplace-card__badge"></div>
          <div className="marketplace-card__badge"></div>
        </div>
        <div className="marketplace-card__price">$23.00 CAD</div>
      </div>
    </div>
  );
};

export default MarketplaceCard;
