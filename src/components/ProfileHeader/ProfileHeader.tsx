import "./ProfileHeader.scss";
// Make sure Profile Picture and Banner are extracted from
// ProfileData once we manage to retrieve those urls from
// Firebase Storage Bucket
import UserBanner from "../../assets/images/nature-banner-1.png";
import UserPicture from "../../assets/images/headshot4.jpeg";
import CompanyBanner from "../../assets/images/nature-banner-2.png";
import CompanyLogo from "../../assets/images/logo1.png";
import { ICompany, IUser } from "customTypes";
import PlaceholderBanner from "../../assets/images/placeholder-banner.png";
import PlaceholderPhoto from "../../assets/images/placeholder-photo.png";
import PlaceholderLogo from "../../assets/images/placeholder-logo.png";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { MouseEventHandler } from "react";
interface ProfileHeaderProps {
  ProfileData?: IUser;
  CompanyData?: ICompany;
  user: boolean;
  userType?: string;
  editing?: boolean;
  editHeaderHandler?: MouseEventHandler;
}

// interface UserProps {
//   first_name: string;
//   last_name: string;
//   headline: string;
//   location: {
//     city: string;
//     state_province: string;
//     country: string;
//   };
//   profile_picture: string;
//   profile_banner: string;
//   about: string;
// }

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  ProfileData,
  CompanyData,
  user,
  userType,
  editing,
  editHeaderHandler,
}) => {
  const headshotStyle: React.CSSProperties = {
    background: `url(${ProfileData?.profile_picture}) center/cover no-repeat`,
  };

  const logoStyle: React.CSSProperties = {
    background: `url(${CompanyData?.logo}) center/cover no-repeat`,
  };

  return (
    <header className="header">
      <div className="banner-div">
        <img
          src={
            (user && ProfileData?.profile_banner) ||
            CompanyData?.banner ||
            PlaceholderBanner
          }
          alt="User Profile Banner"
          className="header__banner"
        />
      </div>

      <div className="header__details">
        {editing && (
          <div className="header__edit-btn" onClick={editHeaderHandler}>
            <FiEdit2 />
          </div>
        )}
        <div className="header__photo-div">
          {ProfileData?.profile_picture || CompanyData?.logo ? (
            <div
              className="header__photo"
              style={user ? headshotStyle : logoStyle}
            />
          ) : user ? (
            <div className="header__photo-icon">
              <FaUserCircle />
            </div>
          ) : (
            <div className="header__photo-icon">
              <AiOutlineGlobal />
            </div>
          )}
        </div>
        <div className="header__info">
          <h1 className="header__name">
            {user && `${ProfileData?.first_name} ${ProfileData?.last_name}`}
            {!user && `${CompanyData?.name}`}
          </h1>

          {user ? (
            <>
              <p className="header__headline">{`${ProfileData?.headline}`}</p>
              <p className="header__location">
                {ProfileData?.location
                  ? `${ProfileData.location}`
                  : "Add Location"}
              </p>
              <div className="header__connections">Member since FIXME DATE</div>
            </>
          ) : (
            <>
              <p className="header__headline">
                {CompanyData?.headline
                  ? `${CompanyData?.headline}`
                  : "Add Headline"}
              </p>
              <p className="header__location">
                {CompanyData?.location
                  ? `${CompanyData?.location}`
                  : "Add Location"}
              </p>
              <p className="header__connections">
                {CompanyData?.verified ? "Verified" : `Joined FIX ME DATE`}
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
