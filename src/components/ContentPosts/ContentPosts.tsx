import "./ContentPosts.scss";
import UserPosts from "../../data/UserPosts.json";

type Post = {
  author_id: string;
  created_at: string;
  body: string;
};

export const ContentPosts: React.FC = () => {
  const truncate = (string: string, maxLength: number) => {
    if (string.length > maxLength) {
      return string.substring(0, maxLength) + "...";
    } else {
      return string;
    }
  };

  return (
    <div className="posts">
      <h3 className="posts__title">Posts</h3>
      <div className="posts__list">
        {UserPosts.map((post: Post) => (
          <div key={post.created_at} className="posts__card">
            <p className="posts__user">{post.author_id}</p>
            <p className="posts__timestamp">{post.created_at}</p>
            <p className="posts__content">{truncate(post.body, 90)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
