import "./Affiliations.scss";
import UserConnections from "../../data/UserConnections.json";
export const Affiliations: React.FC = () => {
  return (
    <div className="affiliations">
      <h3 className="affiliations__title">Affiliations</h3>
      <div className="affiliations__cards">
        {UserConnections.map((connection) => (
          <div className="connection">
            <img
              src={connection.profile_picture}
              className="connection_pic"
              alt="profile picture"
            />
            <p className="connection__name">{connection.first_name}</p>
            <p className="connection__country">{connection.location.country}</p>
          </div>
        ))}
        {/* map affiliations. cap number? scroll? 
            each card: company: round image, company name, user: round image, name/location?
            */}
      </div>
    </div>
  );
};
