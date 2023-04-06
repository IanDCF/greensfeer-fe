import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdStorefront } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import "./Searchbar.scss";
import companyLogo from "../../assets/images/placeholder-logo.png";
import CompanyBanner from "../../assets/images/nature-banner-2.png";
interface Result {
  image: string | undefined;
  post_name: string;
  market_post_id: string;
  methodology: string;
}

const MarketplaceSearch = () => {
  const [marketSearch, setMarketSearch] = useState("");
  const [marketSearchResult, setMarketSearchResult] = useState<Array<Result>>(
    []
  );
  const [marketSearchDropdown, setMarketSearchDropdown] = useState(false);

  const sampleListings = [
    {
      image: CompanyBanner,
      post_name: "sample",
      market_post_id: "testpost",
      methodology: "reef restoration",
    },
    {
      image: "",
      post_name: "default",
      market_post_id: "noimage",
      methodology: "financing",
    },
  ];

  const handleSearch = () => {
    toggleSearchDropdown();
    setMarketSearch("");
  };

  const toggleSearchDropdown = () => {
    setMarketSearchDropdown(!marketSearchDropdown);
  };

  useEffect(() => {
    if (marketSearch.length > 0) {
      setMarketSearchDropdown(true);
      setMarketSearchResult(
        sampleListings.filter((listing) => {
          const regex = new RegExp(`${marketSearch}`, "i");
          return listing.post_name.match(regex);
        })
      );
    } else {
      setMarketSearchDropdown(false);
    }
  }, [marketSearch]);

  const logoStyle: React.CSSProperties = {
    background: `url(${companyLogo}) center/cover no-repeat`,
  };
  return (
    <div className="search">
      <MdStorefront className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search Marketplace"
        onChange={(e) => {
          e.preventDefault();
          setMarketSearch(e.target.value);
        }}
        value={marketSearch}
      />
      {marketSearchDropdown && (
        <div className="search__dropdown" onClick={handleSearch}>
          {marketSearchResult.map((listing) => {
            return (
              <Link
                to={`/marketplace/${listing.market_post_id}`}
                key={listing.market_post_id}
                className="search__link"
              >
                {listing.image ? (
                  // company logo not banner
                  <img className="search__photo" src={`${listing.image}`} />
                ) : (
                  <div className="search__photo">
                    <AiOutlineGlobal />
                  </div>
                )}
                <div className="search__text">
                  <div className="search__name">{listing.post_name}</div>
                </div>
                <div className="search__separator">
                  <BsDot />
                </div>
                <div className="search__listing-type">
                  {/* change to sector */}
                  {listing.methodology}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MarketplaceSearch;
