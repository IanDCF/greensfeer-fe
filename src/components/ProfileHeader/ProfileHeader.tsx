import "./ProfileHeader.scss";
import { ICompany, IUser } from "customTypes";
import PlaceholderBanner from "../../assets/images/placeholder-banner.png";
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

  const imageStyle: (image: string) => React.CSSProperties = (image) => {
    return { background: `url(${image}) center/cover no-repeat` };
  };

  const formatDate = (dateStr: string | undefined) => {
    if (dateStr === undefined) {
      // Handle the case where dateStr is undefined, e.g. return a default value or throw an error
      return "Greensfeer";
    }
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
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
        {user && ProfileData?.profile_banner && (
          <div
            className="header__banner"
            style={imageStyle(ProfileData.profile_banner)}
          />
        )}
        {CompanyData?.banner && (
          <div
            className="header__banner"
            style={imageStyle(CompanyData.banner)}
          />
        )}
        {!user && !ProfileData?.profile_banner && !CompanyData?.banner && (
          <div
            className="header__banner"
            style={imageStyle(PlaceholderBanner)}
          />
        )}
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
              <div className="header__connections">{`Member since ${formatDate(
                ProfileData?.created_at
              )}`}</div>
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
                {CompanyData?.verified
                  ? "Verified"
                  : `Joined ${formatDate(CompanyData?.created_at)}`}
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
