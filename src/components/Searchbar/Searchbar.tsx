import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import "./Searchbar.scss";
import { BsDot } from "react-icons/bs";
import displayPic from "../../assets/images/Mohan-muruge.jpg";
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
    console.log(profiles);
  };
  useEffect(() => {
    getProfiles();
  }, []);
  const sampleProfiles = [
    {
      profile_picture: "",
      first_name: "T",
      last_name: "M",
      uid: "testuser",
      headline: "",
    },
    {
      profile_picture: displayPic,
      first_name: "I",
      last_name: "D",
      uid: "mq9jbuGVuRbWsFL5661Wtg2r5ef2",
      headline: "Project Developer",
    },
    {
      logo: "https://firebasestorage.googleapis.com/v0/b/greensfeer-db-dd101.appspot.com/o/placeholder-logo.png?alt=media&token=6331817b-5ab2-4673-8bbd-995b805d062c",
      name: "CarbonBlu",
      company_id: "a13e7421-dbac-4f67-9ed9-2a0c0aa1f658",
      headline: "Restoring coral reefs since 2000",
    },
    {
      logo: "",
      name: "test",
      company_id: "testcompany",
      headline: "",
    },
  ];

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

  const displayPicture: React.CSSProperties = {
    background: `url(${displayPic}) center/cover no-repeat`,
  };

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
      {searchDropdown && (
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
                    <img
                      className="search__photo"
                      src={`${profile.profile_picture}`}
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
                  <div className="search__headline">{profile.headline}</div>
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
                  <div className="search__headline">
                    {profile.headline ? profile.headline : ""}
                  </div>
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
