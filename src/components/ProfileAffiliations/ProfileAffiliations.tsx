import "./ProfileAffiliations.scss";
import companyLogo1 from "../../assets/images/affiliation1.png";
import companyLogo2 from "../../assets/images/affiliation2.png";
import UserAffilliations from "../../data/UserAffiliations.json";
import { IoIosAdd } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICompany } from "customTypes";
import { getAllAffiliations } from "../../helpers/affiliationFetcher";

interface ProfileAffiliationProps {
  userType?: string;
}

const getUserIdFromUrl = (url: string): string | null => {
  const regex = /^\/gs\/(\w+)$/; // Regular expression to match the URL pattern
  const match = url.match(regex); // Try to match the URL with the regular expression

  if (match && match.length > 1) {
    return match[1]; // Extract the userId from the regex match
  }

  return null; // Return null if no match is found
};

export const ProfileAffiliations: React.FC<ProfileAffiliationProps> = ({
  userType,
}) => {
  const uid = getUserIdFromUrl(window.location.pathname); // Get userId from the URL path
  console.log(uid);
  const [userAfilliations, setUserAfilliation] = useState<ICompany[] | null>(
    null
  );
  useEffect(() => {
    const affiliations = async () => {
      if (uid) {
        const affiliations = await getAllAffiliations(uid);
        console.log(affiliations);
        setUserAfilliation(affiliations);
      }
    };
    affiliations();
  }, []);
  const logoStyle1: React.CSSProperties = {
    background: `url(${companyLogo1}) center/cover no-repeat`,
  };
  const logoStyle2: React.CSSProperties = {
    background: `url(${companyLogo2}) center/cover no-repeat`,
  };
  const logoStyle: (logo: string) => React.CSSProperties = (logo) => {
    return { background: `url(${logo}) center/cover no-repeat` };
  };

  return (
    <div className="affiliations">
      <h3 className="affiliations__title">Affiliations</h3>
      <div className="affiliations__list">
        {userAfilliations &&
          userAfilliations?.length > 0 &&
          userAfilliations.map((aff) => (
            <Link to={`/company/${aff.company_id}`}>
              <div className="affiliations__company">
                <div className="affiliations__logo-div">
                  <div
                    className="affiliations__logo"
                    //Currently there is no logo in the aff object
                    style={logoStyle(aff.logo)}
                  />
                </div>
                <p className="affiliations__name">{aff.name}</p>
              </div>
            </Link>
          ))}

        {userType === "current" && (
          <div className="affiliations__company">
            <Link
              to="/create-company/step1"
              className="affiliations__logo-div-add"
            >
              <IoIosAdd />
            </Link>
            <p className="affiliations__name">Add New</p>
          </div>
        )}
      </div>
    </div>
  );
};
