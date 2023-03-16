import { FC } from "react";
export const ProfileHeader: FC = () => {
  return (
    <div className="header">
      {/* banner, profile pic, name, headline, location */}
      <div className="banner">banner</div>
      <div className="card">
        <div className="card__photo"></div>
        <h1 className="card__name"></h1>
        <p className="card__headline"></p>
        <p className="card__location"></p>
        <p className="card__connections"></p>
      </div>
    </div>
  );
};
