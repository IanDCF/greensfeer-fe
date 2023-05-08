import { useParams, useNavigate } from "react-router-dom";
import "./Marketplace.scss";
import MarketplaceList from "../../components/MarketplaceList/MarketplaceList";
import MarketplaceSelected from "../../components/MarketplaceSelected/MarketplaceSelected";
import allMarketPosts from "../../helpers/allMarketFetcher";
import React, {
  useState,
  useEffect,
  MouseEventHandler,
  FormEvent,
} from "react";
import { IMarketPost, IFilter } from "customTypes";
import selectMarketPost from "../../helpers/selectedMarketFetcher";
import FilterBar from "../../components/FilterBar/FilterBar";
import PromptModal from "../../components/PromptModal/PromptModal";
import MarketFilterMenu from "../../components/MarketFilterMenu/MarketFilterMenu";


type FilterProps = "post_type" | "post_category" | "sector" | "company_name";

const Marketplace: React.FC = () => {
  const { listing_id } = useParams(); // Retrieve the listingId from URL pathname directly
  const [marketPosts, setMarketPosts] = useState<IMarketPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IMarketPost | undefined>();
  const [marketplaceToggle, setMarketplaceToggle] = useState(false);
  const [filtered, setFiltered] = useState<IMarketPost[]>([]);
  const [openFilter, setOpenFilter]=useState<boolean>(true)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let filt = {} as IFilter;
    const refine = (array: IMarketPost[], propToEval: FilterProps) => {
      const matches = [
        ...array.filter((item) => {
          for (let i = 0; i < filt[propToEval].length; i++) {
            if (item[propToEval] === filt[propToEval][i]) return true;
          }
        }),
      ];
      return matches;
    };
    for (let el of e.currentTarget.elements) {
      //if fieldset check children
      if (el.tagName === "FIELDSET") {
        //fieldset classnames match market post properties
        filt[el.className] = [];

        const inputs = el.querySelectorAll("input");
        inputs.forEach((input) => {
          if (input.checked) {
            //add checked filter inputs to the field they would match on market post
            filt[el.className] && filt[el.className].push(input.value);
          }
        });
      }
    }
    let matches = marketPosts;

    for (const key in filt) {
      if (filt[key].length) {
        matches = refine(matches, key as FilterProps);
        console.log(matches);
      }
    }

    setFiltered(matches);
    setOpenFilter(!openFilter)

    //array of properties from filter, can compare to nested market post props?
  };

  const handleFilter = (e: React.MouseEvent) => {
    setOpenFilter(!openFilter)

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
            <MarketFilterMenu handleSubmit={handleSubmit} handleFilter={handleFilter} open={openFilter}/>
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
