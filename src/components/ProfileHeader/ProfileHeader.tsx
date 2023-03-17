import { FC } from "react";
import "./ProfileHeader.scss";
export const ProfileHeader: FC = ({ ProfileData }) => {
  return (
    <div className="header">
      {/* banner, profile pic, name, headline, location */}
      <img src={ProfileData.profile_banner} className="banner" />
      <div className="card">
        <div className="card__left">
          <img src={ProfileData.profile_picture} className="card__photo" />
        </div>
        <div className="card_right">
          <h1 className="card__name">{`${ProfileData.first_name} ${ProfileData.last_name}`}</h1>
          <p className="card__headline">{ProfileData.headline}</p>
          <p className="card__location">{`${ProfileData.location.city}, ${ProfileData.location.state_province}, ${ProfileData.location.country}`}</p>
          <p className="card__connections"></p>
        </div>
      </div>
    </div>
  );
};
