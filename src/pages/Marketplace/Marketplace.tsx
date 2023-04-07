import { useParams, useNavigate } from "react-router-dom";
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
  const [marketplaceToggle, setMarketplaceToggle] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const posts = await allMarketPosts();
      setMarketPosts(posts);
    };
    getData();
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

  const [openCompanyModal, setOpenCompanyModal] = useState<boolean>(true);
  const clickHandler: MouseEventHandler = () => {
    setOpenCompanyModal(false);
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
            <FilterBar />
            <MarketplaceList
              Posts={marketPosts}
              clickHandler={handleMarketplaceToggle}
              urlHandler={handleMarketplaceURL}
            />
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
          <MarketplaceList
            Posts={marketPosts}
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
