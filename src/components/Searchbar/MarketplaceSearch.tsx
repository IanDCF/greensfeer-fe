import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdStorefront } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import "./Searchbar.scss";
import { IMarketPost } from "customTypes";
import allMarketPosts from "../../helpers/allMarketFetcher";

const MarketplaceSearch = () => {
  const [marketSearch, setMarketSearch] = useState("");
  const [posts, setPosts] = useState<IMarketPost[]>([]);
  const [marketResult, setMarketResult] = useState<IMarketPost[]>([]);
  const [marketSearchDropdown, setMarketSearchDropdown] = useState(false);
  const getPosts = async () => {
    const listings = await allMarketPosts();
    setPosts(listings);
  };

  useEffect(() => {
    getPosts();
  }, []);

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
      setMarketResult(
        posts?.filter((listing) => {
          const regex = new RegExp(`${marketSearch}`, "i");
          return listing.post_name.match(regex);
        })
      );
    } else {
      setMarketSearchDropdown(false);
    }
  }, [marketSearch]);

  const marketResultLength = marketResult?.length || 0;

  return (
    <div className="search">
      <MdStorefront className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search marketplace"
        onChange={(e) => {
          e.preventDefault();
          setMarketSearch(e.target.value);
        }}
        value={marketSearch}
      />
      {marketSearchDropdown && marketResultLength > 0 && (
        <div className="search__dropdown" onClick={handleSearch}>
          {marketResult.map((listing) => {
            return (
              <Link
                to={`/marketplace/${listing.market_post_id}`}
                key={listing.market_post_id}
                className="search__link"
              >
                {listing.logo ? (
                  <img className="search__photo" src={`${listing.logo}`} />
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
                <div className="search__listing-type">{listing.sector}</div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MarketplaceSearch;
