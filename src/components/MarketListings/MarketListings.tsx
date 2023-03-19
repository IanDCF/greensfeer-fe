import "./MarketListings.scss";

interface Post {
  post_name: string;
  post_type: string;
  post_category: string;
  company_id: string;
  p?: {
    total_price: number;
  };
}

interface MarketThumbnailsProps {
  title: string;
  posts: Post[];
}

export const MarketListings: React.FC<MarketThumbnailsProps> = ({
  title,
  posts,
}) => {
  const truncate = (string: string, maxLength: number) => {
    if (string.length > maxLength) {
      return string.substring(0, maxLength) + "...";
    } else {
      return string;
    }
  };

  return (
    <div className="posts">
      <h3 className="posts__title">{title}</h3>
      <div className="posts__list">
        {posts
          ? posts.map((post) => (
              <div
                key={`${post.post_name}${post.company_id}`}
                className="posts__card"
              >
                <div className="posts__timestamp">{post.post_category}</div>
                <div className="posts__user">{post.post_name}</div>
                <div className="posts__timestamp">{post.company_id}</div>
                <div className="posts__content">
                  {post.p ? post.p.total_price : ""}
                </div>
              </div>
            ))
          : "loading"}
        {/* map posts
                each card: post category, post name, company_id, optional p.total price
                */}
      </div>
    </div>
  );
};
