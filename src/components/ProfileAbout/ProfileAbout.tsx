export const ProfileAbout: React.FC = () => {
  const user = "";
  return (
    <div className="about">
      {/* optional rendering */}
      <h3 className="about__title">About</h3>
      <p className="about__text">
        {user ? (user.about ? about : "Tell us about yourself") : ""}
      </p>
    </div>
  );
};
