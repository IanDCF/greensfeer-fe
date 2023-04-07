import "./CreateCompany.scss";
import logo from "../../assets/logos/greensfeer-logo.png";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { GoSearch } from "react-icons/go";
import SearchDropdown from "../../components/SearchDropdown/SearchDropdown";
import { useState, useEffect } from "react";

const CompanySearch = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchDropdown, setSearchDropdown] = useState(false);

  const { currentUser } = useAuth();

  const handleSearch = () => {
    toggleSearchDropdown();
    setSearch("");
  };

  const toggleSearchDropdown = () => {
    setSearchDropdown(!searchDropdown);
  };

  useEffect(() => {
    if (search.length > 0) {
      setSearchDropdown(true);
    } else {
      setSearchDropdown(false);
    }
  }, [search]);

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
              comopany name
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
            {searchDropdown && (
              <SearchDropdown search={search} handleSearch={handleSearch} />
            )}
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
