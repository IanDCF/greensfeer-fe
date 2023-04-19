import { useParams, useNavigate } from "react-router-dom";
import "./Marketplace.scss";
import MarketplaceList from "../../components/MarketplaceList/MarketplaceList";
import MarketplaceSelected from "../../components/MarketplaceSelected/MarketplaceSelected";
import allMarketPosts from "../../helpers/allMarketFetcher";
import React, { useState, useEffect, MouseEventHandler } from "react";
import { IMarketPost } from "customTypes";
import selectMarketPost from "../../helpers/selectedMarketFetcher";
import FilterBar from "../../components/FilterBar/FilterBar";
import PromptModal from "../../components/PromptModal/PromptModal";

const Marketplace: React.FC = () => {
  const { listing_id } = useParams(); // Retrieve the listingId from URL pathname directly
  const [marketPosts, setMarketPosts] = useState<IMarketPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IMarketPost | undefined>();
  const [marketplaceToggle, setMarketplaceToggle] = useState(false);
  const [filtered, setFiltered] = useState<IMarketPost[]>([]);

  const handleFilter = (e: React.MouseEvent) => {
    const filterField = e.currentTarget.id;
    const filterPosts = marketPosts.filter((post) => {
      return post.post_type === filterField;
    });
    for (let el of document.getElementsByClassName(
      "filter-bar__parameter--active"
    )) {
      el.classList.remove("filter-bar__parameter--active");
    }
    e.currentTarget.classList.add("filter-bar__parameter--active");
    setFiltered(filterPosts);
  };

  const clearFilter = () => {
    setFiltered([]);
  };

  useEffect(() => {
    const getData = async () => {
      const posts = await allMarketPosts();
      setMarketPosts(posts);
    };
    getData();
    if (!localStorage.getItem("CompanyModalSeen")) {
      setTimeout(() => {
        setOpenCompanyModal(true);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    // Call selectMarketPost with listing_id as a dependency
    const getPost = async () => {
      if (listing_id) {
        const post = await selectMarketPost(listing_id);
        setSelectedPost(post);
      }
    };
    getPost();
  }, [listing_id]); // Add listing_id as a dependency

  const [openCompanyModal, setOpenCompanyModal] = useState<boolean>(false);
  const clickHandler: MouseEventHandler = () => {
    setOpenCompanyModal(false);
    localStorage.setItem("CompanyModalSeen", "yes");
  };

  const handleMarketplaceToggle = () => {
    setMarketplaceToggle(!marketplaceToggle);
  };

  const navigate = useNavigate();

  const handleMarketplaceURL = (listingId: string) => {
    navigate(`/marketplace/${listingId}`);
  };

  return (
    <div className="marketplace-container">
      <section className="marketplace-container__mobile">
        {marketplaceToggle && (
          <MarketplaceSelected
            Post={selectedPost}
            clickHandler={handleMarketplaceToggle}
          />
        )}
        {!marketplaceToggle && (
          <>
            <FilterBar handleFilter={handleFilter} clearFilter={clearFilter} />
            <MarketplaceList
              Posts={filtered.length > 0 ? filtered : marketPosts}
              clickHandler={handleMarketplaceToggle}
              urlHandler={handleMarketplaceURL}
            />
            <PromptModal open={openCompanyModal} clickHandler={clickHandler} />
          </>
        )}
      </section>
      <section className="marketplace-container__tablet-desktop">
        <div className="marketplace-container__filter-bar">
          <FilterBar handleFilter={handleFilter} clearFilter={clearFilter} />
        </div>

        <div className="marketplace-container__explorer">
          {" "}
          <MarketplaceList
            Posts={filtered.length > 0 ? filtered : marketPosts}
            urlHandler={handleMarketplaceURL}
          />
          <MarketplaceSelected Post={selectedPost} />
        </div>
        <PromptModal open={openCompanyModal} clickHandler={clickHandler} />
      </section>
    </div>
  );
};

export default Marketplace;
