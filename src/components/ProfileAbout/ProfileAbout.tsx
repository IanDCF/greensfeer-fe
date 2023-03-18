import "./ProfileAbout.scss";

interface ProfileProps {
  first_name: string;
  last_name: string;
  headline: string;
  location: {
    city: string;
    state_province: string;
    country: string;
  };
  profile_picture: string;
  profile_banner: string;
  about: string;
}

interface ProfileAboutProps {
  ProfileData: ProfileProps;
}

export const ProfileAbout: React.FC<ProfileAboutProps> = ({ ProfileData }) => {
  return (
    <div className="about">
      {/* optional rendering */}
      <h3 className="about__title">About</h3>
      <p className="about__text">
        Highly experienced project developer in the Voluntary Carbon market,
        with a track record of success spanning over 10 years. Currently working
        with India's Forest, Nabil is a seasoned professional who has helped
        numerous clients achieve their carbon offset goals through innovative
        and sustainable projects.
      </p>
    </div>
  );
};
