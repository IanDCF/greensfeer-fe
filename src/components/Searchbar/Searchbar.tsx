import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import "./Searchbar.scss";
import { BsDot } from "react-icons/bs";
import getAllCompanies from "../../helpers/allCompanyFetcher";
import { allUsers } from "../../helpers/userFetcher";
import { ICompany, IUser } from "customTypes";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [profiles, setProfiles] = useState<(IUser | ICompany)[]>([]);
  const [searchResult, setSearchResult] = useState<(IUser | ICompany)[]>();
  const [searchDropdown, setSearchDropdown] = useState(false);

  const getProfiles = async () => {
    // TODO: create a specific GET that returns necessary details
    const companies = await getAllCompanies();
    const users = await allUsers();
    if (users) {
      setProfiles([...users, ...companies]);
    }
  };
  useEffect(() => {
    getProfiles();
  }, []);

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
      setSearchResult(
        profiles?.filter((profile) => {
          const regex = new RegExp(`${search}`, "i");
          const match = (nameStr: string | undefined) => {
            if (nameStr?.match(regex)) return true;
          };
          if (
            ("first_name" in profile && match(profile.first_name)) ||
            ("last_name" in profile && match(profile.last_name)) ||
            ("name" in profile && match(profile.name))
            // first name match || last name match || name match
          )
            return true;
        })
      );
    } else {
      setSearchDropdown(false);
    }
  }, [search]);

  const pictureStyle: (logo: string) => React.CSSProperties = (logo) => {
    return { background: `url(${logo}) center/cover no-repeat` };
  };

  const searchResultLength = searchResult?.length || 0;

  return (
    <div className="search">
      <GoSearch className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      {searchDropdown && searchResultLength === searchResult?.length && (
        <div className="search__dropdown" onClick={handleSearch}>
          {searchResult?.map((profile: IUser | ICompany) => {
            if ("uid" in profile) {
              return (
                <Link
                  to={`/gs/${profile.uid}`}
                  key={profile.uid}
                  className="search__link"
                >
                  {profile.profile_picture ? (
                    <div
                      className="search__photo"
                      style={pictureStyle(profile.profile_picture)}
                    />
                  ) : (
                    <div className="search__photo">
                      <FaUserCircle />
                    </div>
                  )}
                  <div className="search__text">
                    <div className="search__name">{`${profile.first_name} ${profile.last_name}`}</div>
                  </div>
                  <div className="search__separator">
                    <BsDot />
                  </div>
                  <div className="search__headline">
                    {profile && profile.headline}
                    {!profile.headline && profile.role}
                  </div>
                </Link>
              );
            } else {
              return (
                <Link
                  to={`/company/${profile.company_id}`}
                  key={profile.company_id}
                  className="search__link"
                >
                  {profile.logo ? (
                    <img className="search__photo" src={`${profile.logo}`} />
                  ) : (
                    <div className="search__photo">
                      <FaUserCircle />
                    </div>
                  )}
                  <div className="search__text">
                    {<div className="search__name">{profile.name}</div>}
                  </div>
                  <div className="search__separator">
                    <BsDot />
                  </div>
                  <div className="search__headline">Company</div>
                  <div className="search__separator">
                    <BsDot />
                  </div>
                  <div className="search__headline">{profile?.sector}</div>
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
