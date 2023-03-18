import "./ProfileHeader.scss";
import ProfileBanner from "../../assets/images/nature-banner-1.png";
import ProfilePicture from "../../assets/images/headshot4.jpeg";
interface ProfileHeaderProps {
  ProfileData: ProfileProps;
}

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

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  ProfileData,
}) => {
  const headshotStyle: React.CSSProperties = {
    background: `url(${ProfilePicture}) center/cover no-repeat`,
  };

  return (
    <header className="header">
      <div className="banner-div">
        <img
          src={ProfileBanner}
          alt="User Profile Banner"
          className="header__banner"
        />
      </div>

      <div className="header__details">
        <div className="header__photo-div">
          <div className="header__photo" style={headshotStyle} />
        </div>
        <div className="header__info">
          <h1 className="header__name">Nabil Furte</h1>
          <p className="header__headline">
            Project Developer @ India's Forest's
          </p>
          <p className="header__location">Denver, Colorado, USA</p>
          <p className="header__connections">200 Connections</p>
        </div>
      </div>
      {/* banner, profile pic, name, headline, location */}
    </header>
  );
};
