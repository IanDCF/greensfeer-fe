import CompanyBanner from "../../assets/images/nature-banner-2.png";
import CompanyLogo from "../../assets/images/logo1.png";
import "./MarketplaceSelected.scss";
import VerifiedIcon from "../../assets/logos/greensfeer-logo.png";
import sdg1 from "../../assets/icons/sdg1.png";
import sdg2 from "../../assets/icons/sdg2.png";
import sdg3 from "../../assets/icons/sdg3.png";
import sdg4 from "../../assets/icons/sdg4.png";
import sdg5 from "../../assets/icons/sdg5.png";
import sdg6 from "../../assets/icons/sdg6.png";
import sdg7 from "../../assets/icons/sdg7.png";
import CoralReef from "../../assets/images/coralreef.png";
import { IMarketPost } from "customTypes";
import { BiCheckShield } from "react-icons/bi";
interface Post {
  Post?: IMarketPost;
}

const MarketplaceSelected: React.FC<Post> = ({ Post }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };
  return (
    <section className="marketplace-select">
      <div className="marketplace-select__body">
        <div className="marketplace-select__banner">
          <img
            src={CompanyBanner}
            alt="Company Banner"
            className="marketplace-select__img"
          />
        </div>

        <div className="marketplace-select__details">
          {/* Render ep_type is project, else render service type: we need to discuss */}
          <div className="marketplace-select__ep-type">{Post?.p?.ep_type}</div>
          <div className="marketplace-select__post-name">{Post?.post_name}</div>
          <div className="marketplace-select__company">
            <div className="marketplace-select__company-name">
              Company Name Fix Required
            </div>
            <div className="marketplace-select__company-verified">
              {/* <img
                className="marketplace-select__verified-icon"
                src={VerifiedIcon}
              /> */}
              <BiCheckShield />
            </div>
          </div>
          <div className="marketplace-select__location">
            {`${Post?.location.city}, ${Post?.location.state_province}, ${Post?.location.country}`}
          </div>
          <div className="marketplace-select__date-listed">
            Listed on {Post && formatDate(Post.created_at)}
          </div>
        </div>
        <div className="marketplace-select__description">
          <div className="marketplace-select__title">About</div>
          <div className="marketplace-select__description-text">
            {Post?.description}
          </div>
        </div>
        <div className="marketplace-select__certifications">
          <div className="marketplace-select__title">Tags</div>
          <div className="marketplace-select__certifications-display">
            <div className="marketplace-select__certification">
              Vintage Year: {Post?.p?.vintage_year}
            </div>
            <div className="marketplace-select__certification">
              Price: ${Post?.p?.price_per_credit} / tCO2
            </div>
            <div className="marketplace-select__certification">
              Volume: {Post?.p?.offset_volume}
            </div>
            <div className="marketplace-select__certification">
              Offset Type: {Post?.p?.offset_type}
            </div>
            <div className="marketplace-select__certification">
              {Post?.p?.methodology}
            </div>
          </div>
        </div>
        <div className="marketplace-select__goals">
          <div className="marketplace-select__title">
            Sustainable Development Goals (SDGs)
          </div>
          <div className="marketplace-select__goals-display">
            <div className="marketplace-select__goal">
              <img
                src={sdg1}
                alt="Sustainable Development Goal Icon"
                className="marketplace-select__goal-icon"
              />
            </div>
            <div className="marketplace-select__goal">
              <img
                src={sdg2}
                alt="Sustainable Development Goal Icon"
                className="marketplace-select__goal-icon"
              />
            </div>
            <div className="marketplace-select__goal">
              <img
                src={sdg3}
                alt="Sustainable Development Goal Icon"
                className="marketplace-select__goal-icon"
              />
            </div>
            <div className="marketplace-select__goal">
              <img
                src={sdg4}
                alt="Sustainable Development Goal Icon"
                className="marketplace-select__goal-icon"
              />
            </div>
            <div className="marketplace-select__goal">
              <img
                src={sdg5}
                alt="Sustainable Development Goal Icon"
                className="marketplace-select__goal-icon"
              />
            </div>
            <div className="marketplace-select__goal">
              <img
                src={sdg6}
                alt="Sustainable Development Goal Icon"
                className="marketplace-select__goal-icon"
              />
            </div>
            <div className="marketplace-select__goal">
              <img
                src={sdg7}
                alt="Sustainable Development Goal Icon"
                className="marketplace-select__goal-icon"
              />
            </div>
          </div>
        </div>

        <div className="marketplace-select__photos">
          <div className="marketplace-select__title">Photos</div>
          <div className="marketplace-select__photos-display">
            <div className="marketplace-select__photo">
              <img
                src={CoralReef}
                alt=""
                className="marketplace-select__photo-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSelected;
