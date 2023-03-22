import "./ProfileHeader.scss";
// Make sure Profile Picture and Banner are extracted from
// ProfileData once we manage to retrieve those urls from
// Firebase Storage Bucket
import UserBanner from "../../assets/images/nature-banner-1.png";
import UserPicture from "../../assets/images/headshot4.jpeg";
import CompanyBanner from "../../assets/images/nature-banner-2.png";
import CompanyLogo from "../../assets/images/logo1.png";
interface ProfileHeaderProps {
  ProfileData: UserProps;
  CompanyData: CompanyProps;
  user: boolean;
}

interface UserProps {
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

interface CompanyProps {
  name: string;
  headline: string;
  location: {
    city: string;
    state_province: string;
    country: string;
  };
  logo: string;
  banner: string;
  about: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  ProfileData,
  CompanyData,
  user,
}) => {
  const headshotStyle: React.CSSProperties = {
    background: `url(${
      ProfileData ? ProfileData.profile_picture : UserPicture
    }) center/cover no-repeat`,
  };

  const logoStyle: React.CSSProperties = {
    background: `url(${CompanyLogo}) center/cover no-repeat`,
  };

  return (
    <header className="header">
      <div className="banner-div">
        <img
          src={ProfileData ? ProfileData.profile_banner : "loading"}
          alt="User Profile Banner"
          className="header__banner"
        />
      </div>

      <div className="header__details">
        <div className="header__photo-div">
          <div
            className="header__photo"
            style={ProfileData ? headshotStyle : logoStyle}
          />
        </div>
        <div className="header__info">
          <h1 className="header__name">
            {ProfileData
              ? `${ProfileData.first_name} ${ProfileData.last_name}`
              : "loading"}
            {!user && `${CompanyData.name}`}
          </h1>

          {ProfileData ? (
            <>
              <p className="header__headline">{`${ProfileData.headline}`}</p>
              <p className="header__location">{`${ProfileData.location.city}, ${ProfileData.location.state_province}, ${ProfileData.location.country}`}</p>
              <p className="header__connections">200 Connections</p>
            </>
          ) : (
            "loading"
            //           <>
            //             <p className="header__headline">{`${CompanyData.headline}`}</p>
            //             <p className="header__location">{`${CompanyData.location.city}, ${CompanyData.location.state_province}, ${CompanyData.location.country}`}</p>
            //             <p className="header__connections">Verified</p>
            //           </>
          )}
        </div>
      </div>
    </header>
  );
};
