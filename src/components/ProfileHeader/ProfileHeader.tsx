import { FC } from "react";
import "./ProfileHeader.scss";
export const ProfileHeader: FC = ({ ProfileData }) => {
  return (
    <div className="header">
      {/* banner, profile pic, name, headline, location */}
      <img src={ProfileData.profile_banner} className="header__banner" />
      <div className="user">
        <div className="user__left">
          <img src={ProfileData.profile_picture} className="user__photo" />
        </div>
        <div className="user_right">
          <h1 className="user__name">{`${ProfileData.first_name} ${ProfileData.last_name}`}</h1>
          <p className="user__headline">{ProfileData.headline}</p>
          <p className="user__location">{`${ProfileData.location.city}, ${ProfileData.location.state_province}, ${ProfileData.location.country}`}</p>
          <p className="user__connections"></p>
        </div>
      </div>
    </div>
  );
};
