import "./PostsList.scss";
import UserPosts from "../../data/UserPosts.json";

type Post = {
  content_post_id: string;
  title: string;
  created_at: string;
  body: string;
};

export const PostsList: React.FC = () => {
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
          <div key={post.content_post_id} className="posts__card">
            <p className="posts__user">{post.title}</p>
            <p className="posts__timestamp">
              {new Date(post.created_at).toLocaleString()}
            </p>
            <p className="posts__content">{truncate(post.body, 60)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
