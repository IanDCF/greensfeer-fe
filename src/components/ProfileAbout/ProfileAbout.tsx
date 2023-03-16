export const ProfileAbout: React.FC = () => {
  return (
    <div className="about">
      {/* optional rendering */}
      <h3 className="about__title">About</h3>
      <p className="about__text">
        {user.about ? about : "Tell us about yourself"}
      </p>
    </div>
  );
};
