import "./ProfileAffiliations.scss";
import { IoIosAdd } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { MouseEventHandler, useEffect, useState } from "react";
import { IAffiliation, ICompany } from "customTypes";
import { getAllAffiliations } from "../../helpers/affiliationFetcher";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
interface ProfileAffiliationProps {
  userType?: string;
  editing?: boolean;
  editAffiliationsHandler?: MouseEventHandler;
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
  editing,
  editAffiliationsHandler,
}) => {
  const uid = getUserIdFromUrl(window.location.pathname); // Get userId from the URL path
  const [userAfilliations, setUserAfilliation] = useState<
    IAffiliation[] | null
  >(null);
  useEffect(() => {
    const affiliations = async () => {
      if (uid) {
        const affiliations = await getAllAffiliations(uid);
        setUserAfilliation(affiliations);
      }
    };
    affiliations();
  }, []);
  // const logoStyle1: React.CSSProperties = {
  //   background: `url(${companyLogo1}) center/cover no-repeat`,
  // };
  // const logoStyle2: React.CSSProperties = {
  //   background: `url(${companyLogo2}) center/cover no-repeat`,
  // };
  const logoStyle: (logo: string) => React.CSSProperties = (logo) => {
    return { background: `url(${logo}) center/cover no-repeat` };
  };

  return (
    <div className="affiliations">
      <h3 className="affiliations__title">Affiliations</h3>
      {editing && (
        <div className="header__edit-btn" onClick={editAffiliationsHandler}>
          <FiEdit2 />
        </div>
      )}
      <div className="affiliations__list">
        {userAfilliations &&
          userAfilliations?.length > 0 &&
          userAfilliations.map((aff) => (
            <div key={aff.affiliation_id} className="affiliations__company">
              <Link
                to={`/company/${aff.company_id}`}
                className="affiliations__logo-div"
              >
                {aff.logo ? (
                  <div
                    className="affiliations__logo"
                    style={logoStyle(aff.logo)}
                  />
                ) : (
                  <div className="affiliations__logo-icon">
                    <AiOutlineGlobal />
                  </div>
                )}
              </Link>
              <p className="affiliations__name">{aff.company_name}</p>
            </div>
          ))}

        {userType === "current" && (
          <div className="affiliations__company">
            <Link to="/search-company/" className="affiliations__logo-div-add">
              <IoIosAdd />
            </Link>
            <p className="affiliations__name">Add New</p>
          </div>
        )}
      </div>
    </div>
  );
};
