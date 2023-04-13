import { Link } from "react-router-dom";
import "./CompanyListings.scss";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
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
      {/* {companyProfileType === "affiliated" && (
        <div className="header__edit-btn">
          <FiEdit2 />
        </div>
      )} */}
      <h3 className="listings__title">{title}</h3>
      <div className="listings__list">
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
                  {post?.p && post?.p?.price_per_credit ? (
                    <div className="listings__price">
                      <div className="lisitngs__price-tag">
                        {`\$${post?.p?.price_per_credit} / tCO2`}
                      </div>
                    </div>
                  ) : (
                    ""
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
