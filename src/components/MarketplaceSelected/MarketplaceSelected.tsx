import CompanyBanner from "/assets/images/nature-banner-2.png";
import CompanyLogo from "../../assets/images/logo1.png";
import "./MarketplaceSelected.scss";
import VerifiedIcon from "/assets/logos/greensfeer-logo.png";
import sdg1 from "/assets/icons/sdg1.png";
import sdg2 from "/assets/icons/sdg2.png";
import sdg3 from "/assets/icons/sdg3.png";
import sdg4 from "/assets/icons/sdg4.png";
import sdg5 from "/assets/icons/sdg5.png";
import sdg6 from "/assets/icons/sdg6.png";
import sdg7 from "/assets/icons/sdg7.png";
import CoralReef from "/assets/images/coralreef.png";

const MarketplaceSelected = () => {
  return (
    <section className="marketplace-select">
      <div className="marketplace-select__banner">
        <img
          src={CompanyBanner}
          alt="Company Banner"
          className="marketplace-select__img"
        />
      </div>

      <div className="marketplace-select__body">
        <div className="marketplace-select__details">
          <div className="marketplace-select__ep-type">Carbon Sink</div>
          <div className="marketplace-select__post-name">
            Great Bear Rainforest
          </div>
          <div className="marketplace-select__company">
            <div className="marketplace-select__company-name">
              RJ Seeds Unlimited
            </div>
            <div className="marketplace-select__company-verified">
              <img
                className="marketplace-select__verified-icon"
                src={VerifiedIcon}
              />
            </div>
          </div>
          <div className="marketplace-select__location">
            Sydney, NSW, Australia
          </div>
          <div className="marketplace-select__date-listed">
            Listed on: November 2021
          </div>
        </div>
        <div className="marketplace-select__description">
          <div className="marketplace-select__title">Who we are</div>
          <div className="marketplace-select__description-text">
            Coral reef restoration projects that generate carbon credits
            typically involve the rehabilitation and protection of degraded
            coral reefs. These projects aim to increase the health and
            resilience of coral reefs, which are vital ecosystems that provide
            habitat and food for a wide variety of marine species. One common
            method of coral reef restoration is the use of artificial reefs,
            which are structures made from various materials that provide a
            substrate for coral growth. These structures can range from concrete
            blocks to sunken ships, and are strategically placed in areas where
            coral reefs have been damaged or destroyed. In addition to restoring
            coral reefs, these projects also generate carbon credits by
            sequestering carbon dioxide from the atmosphere. Coral reefs are
            natural carbon sinks, meaning they absorb and store carbon dioxide
            through the process of calcification. By restoring and protecting
            these ecosystems, coral reef restoration projects can help mitigate
            climate change by reducing the amount of carbon dioxide in the
            atmosphere.
          </div>
        </div>
        <div className="marketplace-select__certifications">
          <div className="marketplace-select__title">Certifications</div>
          <div className="marketplace-select__certifications-display">
            <div className="marketplace-select__certification">
              BeZero Carbon Rating
            </div>
            <div className="marketplace-select__certification">
              Vintage Year: 2022
            </div>
            <div className="marketplace-select__certification">
              stock: 8,234
            </div>
            <div className="marketplace-select__certification">Australia</div>
            <div className="marketplace-select__certification">
              Coral Reef Restoration
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
