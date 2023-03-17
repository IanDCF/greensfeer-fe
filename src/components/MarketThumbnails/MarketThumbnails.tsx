import "./MarketThumbnails.scss";
// import UserPosts from "../../data/UserPosts.json";
export const MarketThumbnails: React.FC = ({ title, posts }) => {
  const truncate = (string: string, maxLength: number) => {
    if (string.length > maxLength) {
      return string.substring(0, maxLength) + "...";
    } else {
      return string;
    }
  };
  console.log(posts);

  return (
    <div className="posts">
      <h3 className="posts__title">{title}</h3>
      <div className="posts__cards">
        {posts
          ? posts.map((post) => (
              <div key={`${post.post_name}${post.company_id}`} className="card">
                <div className="card__category">{post.post_category}</div>
                <div className="card__name">{post.post_name}</div>
                <div className="card__company">{post.company_id}</div>
                <div className="card__price">
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
