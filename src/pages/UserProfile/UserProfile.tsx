export const UserProfile: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        {/* banner, profile pic, name, headline, location */}
        <div className="profile__banner"></div>
        <div className="card">
          <div className="card__photo"></div>
          <h1 className="card__name"></h1>
          <p className="card__headline"></p>
          <p className="card__location"></p>
          <p className="card__connections"></p>
        </div>
      </div>
      <div className="profile__about">
        {/* optional rendering */}
        <h3 className="about__title">About</h3>
        <p className="about__text">
          {user.about ? about : "Tell us about yourself"}
        </p>
      </div>
      <div className="profile__affiliations">
        <h3 className="affiliations__title">Affiliations</h3>
        <div className="affiliations__cards">
          {/* map affiliations. cap number? scroll? 
            each card: company: round image, company name, user: round image, name/location?
            */}
        </div>
      </div>
      <div className="profile__posts">
        <h3 className="posts__title">Posts</h3>
        <div className="posts__cards">
          {/* map posts
                each card: title, time since post, body preview
                */}
        </div>
      </div>
    </div>
  );
};
