import { useLocation, matchPath, useParams } from "react-router-dom";
import "./Marketplace.scss";
import MarketplaceList from "../../components/MarketplaceList/MarketplaceList";
import MarketplaceSelected from "../../components/MarketplaceSelected/MarketplaceSelected";
import allMarketPosts from "../../helpers/allMarketFetcher";
import { useState, useEffect, MouseEventHandler } from "react";
import { IMarketPost } from "customTypes";
import selectMarketPost from "../../helpers/selectedMarketFetcher";
import FilterBar from "../../components/FilterBar/FilterBar";
import PromptModal from "../../components/PromptModal/PromptModal";

const Marketplace: React.FC = () => {
  const { listing_id } = useParams(); // Retrieve the listingId from URL pathname directly
  const [marketPosts, setMarketPosts] = useState<IMarketPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IMarketPost | undefined>();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const getData = async () => {
      const posts = await allMarketPosts();
      setMarketPosts(posts);
    };
    getData();
  }, []);

  useEffect(() => {
    // Call selectMarketPost with listing_id as a dependency
    console.log(listing_id);
    const getPost = async () => {
      if (listing_id) {
        const post = await selectMarketPost(listing_id);
        setSelectedPost(post);
      }
    };
    getPost();
  }, [listing_id]); // Add listing_id as a dependency

  const marketplaceListMatch = matchPath(path, "/marketplace");

  const marketplaceItemSelectedMatch = matchPath(
    location.pathname,
    "/marketplace/item"
  );

  const [openCompanyModal, setOpenCompanyModal] = useState<boolean>(true);
  const clickHandler: MouseEventHandler = () => {
    setOpenCompanyModal(false);
  };

  return (
    <div className="marketplace-container">
      <section className="marketplace-container__mobile">
        {marketplaceItemSelectedMatch && (
          <MarketplaceSelected Post={selectedPost} />
        )}
        {marketplaceListMatch && (
          <>
            <FilterBar />
            <MarketplaceList Posts={marketPosts} />
            <PromptModal open={openCompanyModal} clickHandler={clickHandler} />
          </>
        )}
      </section>
      <section className="marketplace-container__tablet-desktop">
        <div className="marketplace-container__filter-bar">
          <FilterBar />
        </div>

        <div className="marketplace-container__explorer">
          {" "}
          <MarketplaceList Posts={marketPosts} />
          <MarketplaceSelected Post={selectedPost} />
        </div>
        <PromptModal open={openCompanyModal} clickHandler={clickHandler} />
      </section>
    </div>
  );
};

export default Marketplace;
