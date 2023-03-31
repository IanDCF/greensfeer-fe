import "./ProfileAffiliations.scss";
import companyLogo1 from "../../assets/images/affiliation1.png";
import companyLogo2 from "../../assets/images/affiliation2.png";
import UserAffilliations from "../../data/UserAffiliations.json";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

// interface UserAffiliations {
//   logo: string;
//   name: string;
//   link: string;
// }

export const ProfileAffiliations: React.FC = () => {
  const logoStyle1: React.CSSProperties = {
    background: `url(${companyLogo1}) center/cover no-repeat`,
  };
  const logoStyle2: React.CSSProperties = {
    background: `url(${companyLogo2}) center/cover no-repeat`,
  };

  return (
    <div className="affiliations">
      <h3 className="affiliations__title">Affiliations</h3>
      <div className="affiliations__list">
        <div className="affiliations__company">
          <div className="affiliations__logo-div">
            <div className="affiliations__logo" style={logoStyle2} />
          </div>

          <p className="affiliations__name">Tesla</p>
        </div>

        <div className="affiliations__company">
          <div className="affiliations__logo-div">
            <div className="affiliations__logo" style={logoStyle1} />
          </div>

          <p className="affiliations__name">Microsoft</p>
        </div>

        <div className="affiliations__company">
          <Link
            to="/create-company/step1"
            className="affiliations__logo-div-add"
          >
            {/* <div className="affiliations__logo" style={logoStyle1} /> */}
            <IoIosAdd />
          </Link>

          <p className="affiliations__name">Add New</p>
        </div>
      </div>
    </div>
  );
};
