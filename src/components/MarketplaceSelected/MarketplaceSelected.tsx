import CompanyBanner from "../../assets/images/placeholder-banner.png";
import "./MarketplaceSelected.scss";
import icon1 from "../../assets/icons/sdg1.png";
import icon2 from "../../assets/icons/sdg2.png";
import icon3 from "../../assets/icons/sdg3.png";
import icon4 from "../../assets/icons/sdg4.png";
import icon5 from "../../assets/icons/sdg5.png";
import icon6 from "../../assets/icons/sdg6.png";
import icon7 from "../../assets/icons/sdg7.png";
import icon8 from "../../assets/icons/sdg8.png";
import icon9 from "../../assets/icons/sdg9.png";
import icon10 from "../../assets/icons/sdg10.png";
import icon11 from "../../assets/icons/sdg11.png";
import icon12 from "../../assets/icons/sdg12.png";
import icon13 from "../../assets/icons/sdg13.png";
import icon14 from "../../assets/icons/sdg14.png";
import icon15 from "../../assets/icons/sdg15.png";
import icon16 from "../../assets/icons/sdg16.png";
import icon17 from "../../assets/icons/sdg17.png";
import { IMarketPost } from "customTypes";
import { BiCheckShield } from "react-icons/bi";
import { TbArrowBackUp } from "react-icons/tb";
import { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
interface Post {
  Post?: IMarketPost;
  clickHandler?: MouseEventHandler<HTMLDivElement>;
}

const MarketplaceSelected: React.FC<Post> = ({ Post, clickHandler }) => {
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

  const [disclaimerToggle, setDisclaimerToggle] = useState(false);
  const disclaimerHandler = () => {
    setDisclaimerToggle(!disclaimerToggle);
  };

  // Define the mapping of SDG numbers to icons
  const sdgMap = (sdg: string) => {
    const map: { [key: string]: string } = {
      sdg1: icon1,
      sdg2: icon2,
      sdg3: icon3,
      sdg4: icon4,
      sdg5: icon5,
      sdg6: icon6,
      sdg7: icon7,
      sdg8: icon8,
      sdg9: icon9,
      sdg10: icon10,
      sdg11: icon11,
      sdg12: icon12,
      sdg13: icon13,
      sdg14: icon14,
      sdg15: icon15,
      sdg16: icon16,
      sdg17: icon17,
    };
    return map[sdg];
  };

  const bannerStyle: (banner: string) => React.CSSProperties = (banner) => {
    return { background: `url(${banner}) center/cover no-repeat` };
  };

  return (
    <section className="marketplace-select">
      {Post ? (
        <div className="marketplace-select__body">
          <div className="marketplace-select__banner">
            <div className="marketplace-select__back" onClick={clickHandler}>
              <TbArrowBackUp />
            </div>

            {Post?.banner ? (
              <div
                className="marketplace-select__img"
                style={bannerStyle(Post.banner)}
              />
            ) : (
              <div
                className="marketplace-select__img"
                style={bannerStyle(CompanyBanner)}
              />
            )}
          </div>

          <div className="marketplace-select__details">
            {disclaimerToggle && (
              <div className="marketplace-select__disclaimer-modal">
                <p>
                  This listing is created and managed by Greensfeer and is not
                  affiliated with or endorsed by the respective company. The
                  information displayed on this profile is gathered from
                  publicly available sources on the web and is provided for
                  educational purposes only.
                </p>
                <p>
                  If any company listed on Greensfeer wishes to have their
                  information removed from our platform, they can contact us and
                  request for removal. Greensfeer reserves the right to remove
                  or modify any company profile and associated information at
                  its discretion. Users are advised to independently verify any
                  information provided on these profiles before making any
                  decisions based on it.
                </p>
                {/* <p>
                  Greensfeer does not provide any consulting, financing,
                  auditing, or other services listed on the platform. Users are
                  solely responsible for conducting their own due diligence and
                  engaging in any business transactions with the companies
                  listed on Greensfeer.
                </p> */}
              </div>
            )}
            <div className="marketplace-select__ep-type">
              {Post?.post_category}
            </div>
            <div className="marketplace-select__post-name">
              {Post?.post_name}
            </div>
            <div className="marketplace-select__company">
              <Link
                to={`/company/${Post?.company_id}`}
                className="marketplace-select__company-name"
              >
                {Post?.company_name}
              </Link>
              {Post?.verified && (
                <div className="marketplace-select__company-verified">
                  <BiCheckShield />
                </div>
              )}
              {Post?.managed && (
                <div
                  className="marketplace-select__disclaimer-icon"
                  onClick={() => disclaimerHandler()}
                >
                  <AiOutlineInfoCircle />
                </div>
              )}
            </div>
            <div className="marketplace-select__location">
              {`${Post?.location}`}
            </div>
            <div className="marketplace-select__date-listed">
              Listed on {Post && formatDate(Post.created_at)}
            </div>
          </div>
          {Post?.description && (
            <div className="marketplace-select__description">
              <div className="marketplace-select__title">About</div>
              <div className="marketplace-select__description-text">
                {Post?.description}
              </div>
            </div>
          )}
          {(Post?.p?.vintage_year ||
            Post?.p?.price_per_credit ||
            Post?.p?.offset_volume ||
            Post?.p?.offset_type ||
            Post?.p?.methodology) && (
            <div className="marketplace-select__certifications">
              <div className="marketplace-select__title">Tags</div>
              <div className="marketplace-select__certifications-display">
                {Post?.p?.vintage_year !== "Select year" && (
                  <div className="marketplace-select__certification">
                    Vintage Year: {Post?.p?.vintage_year}
                  </div>
                )}
                {Post?.p?.price_per_credit && (
                  <div className="marketplace-select__certification">
                    Price: ${Post?.p?.price_per_credit} / tCO2
                  </div>
                )}
                {Post?.p?.offset_volume && (
                  <div className="marketplace-select__certification">
                    Volume: {Post?.p?.offset_volume}
                  </div>
                )}
                {Post?.p?.offset_type && (
                  <div className="marketplace-select__certification">
                    Offset Type: {Post?.p?.offset_type}
                  </div>
                )}
                {Post?.p?.methodology && (
                  <div className="marketplace-select__certification">
                    Methodology: {Post?.p?.methodology}
                  </div>
                )}
              </div>
            </div>
          )}

          {Post?.sdg && (
            <div className="marketplace-select__goals">
              <div className="marketplace-select__title">
                Sustainable Development Goals (SDGs)
              </div>
              <div className="marketplace-select__goals-display">
                {Post?.sdg.map((goal: string) => (
                  <div key={goal} className="marketplace-select__goal">
                    <img
                      src={sdgMap(goal)} // Subtract 1 from goal number to match array index
                      alt={`Sustainable Development Goal Icon ${goal}`}
                      className="marketplace-select__goal-icon"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {Post?.photos && (
            <div className="marketplace-select__photos">
              <div className="marketplace-select__title">Photos</div>
              <div className="marketplace-select__photos-display">
                {Post.photos.map((url: string) => (
                  <div key={url} className="marketplace-select__photo">
                    {" "}
                    <img
                      src={url}
                      alt="Market Listing Photo"
                      className="marketplace-select__photo-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="marketplace-select__loading">
          <span className="loader"></span>
        </div>
      )}
    </section>
  );
};

export default MarketplaceSelected;
