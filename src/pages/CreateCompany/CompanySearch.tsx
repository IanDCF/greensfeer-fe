import "./CreateCompany.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { GoSearch } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import SearchDropdown from "../../components/SearchDropdown/SearchDropdown";
import { useState, useEffect } from "react";
import { ICompany } from "customTypes";
import getAllCompanies from "../../helpers/allCompanyFetcher";
import addAffiliation from "../../helpers/affiliationCreator";
import { useNavigate } from "react-router-dom";

const CompanySearch = () => {
  const [search, setSearch] = useState("");
  const [profiles, setProfiles] = useState<ICompany[]>([]);
  const [searchResult, setSearchResult] = useState<ICompany[]>([]);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [selected, setSelected] = useState<ICompany>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const affiliate = () => {
    selected &&
      addAffiliation(
        currentUser,
        selected?.company_id,
        selected?.company_name,
        selected?.logo
      );
    setTimeout(() => {
      navigate(`/gs/${currentUser?.uid}`);
    }, 2000);
  };

  const handleSearch = () => {
    toggleSearchDropdown();
    setSearch("");
  };

  const getCompanies = async () => {
    const companies = await getAllCompanies();
    setProfiles([...companies]);
  };
  useEffect(() => {
    getCompanies();
  }, []);

  const toggleSearchDropdown = () => {
    setSearchDropdown(!searchDropdown);
  };

  useEffect(() => {
    if (search.length > 0) {
      setSearchDropdown(true);
      setSearchResult(
        profiles?.filter((profile) => {
          const regex = new RegExp(`${search}`, "i");
          const match = (nameStr: string) => {
            if (nameStr?.match(regex)) return true;
          };
          if ("company_name" in profile && match(profile?.company_name))
            return true;
        })
      );
    } else {
      setSearchDropdown(false);
    }
  }, [search]);
  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = e.currentTarget.id;
    const targetCompany = profiles.find(
      (profile) => profile.company_id === targetId
    );
    setSelected(targetCompany);
  };
  const searchResultLength = searchResult?.length || 0;

  return (
    <div className="create-company__form">
      <div className="create-company__logo">
        <img
          src={logo}
          alt="Greensfeer Logo"
          className="create-company__logo-img"
        />
      </div>
      <div className="create-company__heading-search">
        Search company profile or create a new profile
      </div>
      <div className="create-company__input-fields">
        <div className="create-company__text-input">
          <div className="create-company__input-div">
            <label className="create-company__label-text" htmlFor="name">
              company name
            </label>
            <div className="create-company__search-icon">
              <GoSearch />
            </div>
            <input
              id="name"
              type="text"
              name="name"
              className="create-company__input"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
            {searchDropdown && searchResultLength === searchResult?.length && (
              <div className="search__dropdown" onClick={handleSearch}>
                {searchResult?.map((profile: ICompany) => {
                  return (
                    <div
                      onClick={clickHandler}
                      key={profile.company_id}
                      id={profile.company_id}
                      className="search__link"
                    >
                      {profile.logo ? (
                        <img
                          className="search__photo"
                          src={`${profile.logo}`}
                        />
                      ) : (
                        <div className="search__photo">
                          <FaUserCircle />
                        </div>
                      )}
                      <div className="search__text">
                        {
                          <div className="search__name">
                            {profile.company_name}
                          </div>
                        }
                      </div>
                      <div className="search__separator">
                        <BsDot />
                      </div>
                      <div className="search__headline">Company</div>
                      <div className="search__separator">
                        <BsDot />
                      </div>
                      <div className="search__headline">{profile?.sector}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      {selected && (
        <div className="create-company__affiliate" onClick={affiliate}>
          <ControlButton
            dark={false}
            btnType="submit"
            text={`Join ${selected?.company_name}`}
          ></ControlButton>
        </div>
      )}
      <div className="create-company__controls-search">
        <ControlButton
          dark={true}
          text="Cancel"
          link={`/gs/${currentUser?.uid}`}
          btnType="link"
        />
        <ControlButton
          dark={false}
          text="Create"
          btnType="link"
          link="/create-company/step1"
        />
      </div>
    </div>
  );
};

export default CompanySearch;
