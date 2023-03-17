import "./ProfileAbout.scss";
export const ProfileAbout: React.FC = ({ ProfileData }) => {
  const user = "";
  return (
    <div className="about">
      {/* optional rendering */}
      <h3 className="about__title">About</h3>
      <p className="about__text">
        {ProfileData
          ? ProfileData.about
            ? ProfileData.about
            : ProfileData.description
          : "Tell us about yourself"}
      </p>
    </div>
  );
};
