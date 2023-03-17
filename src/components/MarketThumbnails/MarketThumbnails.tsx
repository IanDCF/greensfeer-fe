import "./MarketThumbnails.scss";
import UserPosts from "../../data/UserPosts.json";
export const MarketThumbnails: React.FC = ({ title }) => {
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
      <div className="posts__cards">
        {UserPosts.map((post) => (
          <div key={post.created_at} className="card">
            <div className="card__user">{post.author_id}</div>
            <div className="card__timestamp">{post.created_at}</div>
            <div className="card__content">{truncate(post.body, 90)}</div>
          </div>
        ))}
        {/* map posts
                each card: title, time since post, body preview
                */}
      </div>
    </div>
  );
};
