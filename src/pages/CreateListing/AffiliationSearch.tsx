import "./CreateListing.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { GoSearch } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import SearchDropdown from "../../components/SearchDropdown/SearchDropdown";
import { useState, useEffect } from "react";
import { IAffiliation, ICompany } from "customTypes";
import getAllCompanies from "../../helpers/allCompanyFetcher";
import getaffiliation from "../../helpers/affiliationFetcher";
import { useNavigate } from "react-router-dom";
interface Props {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const AffiliationSearch = ({ handleSubmit }: Props) => {
  const [profiles, setProfiles] = useState<ICompany[]>([]);
  const [selected, setSelected] = useState<ICompany>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const getCompanies = async () => {
    let companies;
    currentUser && (companies = await getaffiliation(currentUser));
    companies && setProfiles([...companies]);
  };
  useEffect(() => {
    getCompanies();
  }, []);

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = e.currentTarget.id;
    const targetCompany = profiles.find(
      (profile) => profile.company_id === targetId
    );
    setSelected(targetCompany);
  };

  return (
    <form className="create-company__form" onSubmit={handleSubmit}>
      <div className="create-company__logo">
        <img
          src={logo}
          alt="Greensfeer Logo"
          className="create-company__logo-img"
        />
      </div>
      <div className="create-company__heading-search">
        Select an affiliated company
      </div>
      <div className="create-company__input-fields">
        <div className="create-company__text-input">
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="name">
              affiliated companies
            </label>
            <select
              id="affiliation"
              name="affiliation"
              className="create-company__input"
            >
              {profiles ? (
                profiles.map((profile) => {
                  return (
                    <option value={profile.company_id} key={profile.company_id}>
                      {profile.company_name}
                    </option>
                  );
                })
              ) : (
                <option>You have no affiliated comapnies</option>
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="create-company__controls-search">
        <ControlButton
          dark={true}
          text="Cancel"
          link={`/gs/${currentUser?.uid}`}
          btnType="link"
        />
        <ControlButton dark={false} text="Create" btnType="submit" />
      </div>
    </form>
  );
};

export default AffiliationSearch;
