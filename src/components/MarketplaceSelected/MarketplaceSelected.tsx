import CompanyBanner from "../../assets/images/nature-banner-2.png";
import CompanyLogo from "../../assets/images/logo1.png";
import "./MarketplaceSelected.scss";
import VerifiedIcon from "../../assets/logos/greensfeer-logo.png";

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

      <div className="mamrketplace-select__body">
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
          <div className="marketplace-select__date-posted">November 2021</div>
        </div>
        <div className="marketplace-select__description">
          Coral reef restoration projects that generate carbon credits typically
          involve the rehabilitation and protection of degraded coral reefs.
          These projects aim to increase the health and resilience of coral
          reefs, which are vital ecosystems that provide habitat and food for a
          wide variety of marine species. One common method of coral reef
          restoration is the use of artificial reefs, which are structures made
          from various materials that provide a substrate for coral growth.
          These structures can range from concrete blocks to sunken ships, and
          are strategically placed in areas where coral reefs have been damaged
          or destroyed. In addition to restoring coral reefs, these projects
          also generate carbon credits by sequestering carbon dioxide from the
          atmosphere. Coral reefs are natural carbon sinks, meaning they absorb
          and store carbon dioxide through the process of calcification. By
          restoring and protecting these ecosystems, coral reef restoration
          projects can help mitigate climate change by reducing the amount of
          carbon dioxide in the atmosphere.
        </div>
        <div className="marketplace-select__goals">
          <div className="marketplace-select__goal"></div>
          <div className="marketplace-select__goal"></div>
          <div className="marketplace-select__goal"></div>
          <div className="marketplace-select__goal"></div>
          <div className="marketplace-select__goal"></div>
          <div className="marketplace-select__goal"></div>
          <div className="marketplace-select__goal"></div>
        </div>
        <div className="marketplace-select__certifications">
          <div className="marketplace-select__certification"></div>
          <div className="marketplace-select__certification"></div>
          <div className="marketplace-select__certification"></div>
          <div className="marketplace-select__certification"></div>
        </div>
        <div className="marketplace-select__photos"></div>
      </div>
    </section>
  );
};

export default MarketplaceSelected;
