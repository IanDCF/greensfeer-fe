import "./PostsList.scss";

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
      <div className="posts__list"></div>
    </div>
  );
};
