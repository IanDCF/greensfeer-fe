import { Link } from "react-router-dom";
import "./CompanyListings.scss";
import { IoIosAddCircleOutline } from "react-icons/io";

interface Post {
  post_name: string;
  post_type: string;
  post_category: string;
  company_id: string;
  sector: string;
  company_name: string;
  p?: {
    price_per_credit: string;
  };
  market_post_id: string;
}

interface MarketThumbnailsProps {
  title: string;
  posts: Post[];
  companyProfileType?: string;
}

export const CompanyListings: React.FC<MarketThumbnailsProps> = ({
  title,
  posts,
  companyProfileType,
}) => {
  const truncate = (string: string, maxLength: number) => {
    if (string.length > maxLength) {
      return string.substring(0, maxLength) + "...";
    } else {
      return string;
    }
  };

  return (
    <div className="listings">
      <h3 className="listings__title">{title}</h3>
      <div className="listings__list">
        {title === "Projects" && (
          <div className="listings__card">
            <div className="listings__card-text">
              <div className="listings__ep-type">Project Type</div>
              <div className="listings__name">Post Name Sometimes Long</div>
              <div className="listings__sector">Sector Name Sometimes Long</div>
            </div>
            <div className="listings__markers">
              <div className="listings__badges">
                <div className="listings__badge"></div>
                <div className="listings__badge"></div>
                <div className="listings__badge"></div>
              </div>
              <div className="listings__price">
                <div className="lisitngs__price-tag">$10 / tCO2</div>
              </div>
            </div>
            {/* <div className="location__location">City, Country</div> */}
            {/* <div className="listings__standrard">Verification Standard</div> */}
            {/* if project has vintage, render: */}
            {/* <div className="listings__vintage">Vintage: YEAR</div> */}
            {/* else, render verification_standard */}
            {/* <div className="listings__price">$23.00 / tCO2</div> */}
          </div>
        )}

        {title === "Services" && (
          <div className="listings__card">
            {/* We need to discuss this from backend perspective */}
            <div className="listings__card-text">
              <div className="listings__ep-type">Service Type</div>
              <div className="listings__name">Post Name Sometimes Long</div>
              <div className="listings__sector">Sector Name Sometimes Long</div>
            </div>
            <div className="listings__contact">Name of Primary Contact</div>
          </div>
        )}

        {posts
          ? posts.map((post) => (
              <Link
                to={`/marketplace/${post.market_post_id}`}
                key={`${post.market_post_id}`}
                className="listings__card"
              >
                <div className="listings__card-text">
                  <div className="listings__ep-type">{post.post_category}</div>
                  <div className="listings__name">{post.post_name}</div>
                  <div className="listings__sector">{post.sector}</div>
                </div>

                <div className="listings__markers">
                  <div className="listings__badges">
                    <div className="listings__badge"></div>
                    <div className="listings__badge"></div>
                    <div className="listings__badge"></div>
                  </div>
                  {post?.p && (
                    <div className="listings__price">
                      <div className="lisitngs__price-tag">
                        {`\$${post?.p?.price_per_credit} / tCO2`}
                      </div>
                    </div>
                  )}
                  {!post?.p && (
                    <div className="listings__price">
                      <div className="listings__contact"></div>
                    </div>
                  )}
                </div>
              </Link>
            ))
          : "loading"}
        {/* map posts
                each card: post category, post name, company_id, optional p.total price
                */}
        {companyProfileType === "affiliated" && (
          <div className="listings__card">
            <Link to="/create-listing/step1" className="listings__add-new">
              <IoIosAddCircleOutline />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
