import "./ProfileHeader.scss";
import { ICompany, IUser } from "customTypes";
import PlaceholderBanner from "../../assets/images/placeholder-banner.png";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { MouseEventHandler, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
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
  const [disclaimerToggle, setDisclaimerToggle] = useState(false);

  const disclaimerHandler = () => {
    setDisclaimerToggle(!disclaimerToggle);
  };

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
              <div className="header__connections">
                {CompanyData?.verified && "Verified"}
                {CompanyData?.managed && (
                  <div className="header__disclaimer">
                    <div className="header__connections">
                      Disclaimer: Managed by Greensfeer
                    </div>
                    <div
                      className="header__disclaimer-icon"
                      onClick={() => disclaimerHandler()}
                    >
                      <AiOutlineInfoCircle />
                    </div>
                  </div>
                )}
                {!CompanyData?.verified &&
                  !CompanyData?.managed &&
                  `Joined ${formatDate(CompanyData?.created_at)}`}
              </div>
            </>
          )}
        </div>
      </div>
      {disclaimerToggle && (
        <div className="header__disclaimer-modal">
          <p>
            This company profile is created and managed by Greensfeer and is not
            affiliated with or endorsed by the respective company. The
            information displayed on this profile is gathered from publicly
            available sources on the web and is provided for educational
            purposes only.
            {/* Greensfeer does not endorse or
            guarantee the accuracy or completeness of the information provided
            on these profiles. */}
          </p>
          <p>
            If any company listed on Greensfeer wishes to have their information
            removed from our platform, they can contact us and request for
            removal. Greensfeer reserves the right to remove or modify any
            company profile and associated information at its discretion. Users
            are advised to independently verify any information provided on
            these profiles before making any decisions based on it.
          </p>
          {/* <p>
            Greensfeer does not provide any consulting, financing, auditing, or
            other services listed on the platform. Users are solely responsible
            for conducting their own due diligence and engaging in any business
            transactions with the companies listed on Greensfeer.
            Greensfeer
            shall not be liable for any loss, damage, or inconvenience arising
            from the use of the information provided on the company profiles or
            any transactions or interactions with the listed companies.
          </p> */}
        </div>
      )}
    </header>
  );
};
