import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import "./Searchbar.scss";
import { BsDot } from "react-icons/bs";
import displayPic from "../../assets/images/Mohan-muruge.jpg";
interface Result {
  profile_picture: string | undefined;
  logo: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  name: string | undefined;
  uid: string | undefined;
  company_id: string | undefined;
  headline: string | undefined;
}

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<Array<Object>>([]);
  const [searchDropdown, setSearchDropdown] = useState(false);
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
        sampleProfiles.filter((profile) => {
          const regex = new RegExp(`${search}`, "i");
          const match = (nameStr: string | undefined) => {
            if (nameStr?.match(regex)) return true;
          };
          if (
            match(profile.first_name) ||
            match(profile.last_name) ||
            match(profile.name)
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
          {searchResult.map((profile) => {
            return (
              <Link
                to={
                  profile.uid
                    ? `/gs/${profile.uid}`
                    : `/company/${profile.company_id}`
                }
                key={profile.uid ? profile.uid : profile.company_id}
                className="search__link"
              >
                {profile.profile_picture ? (
                  <img
                    className="search__photo"
                    src={`${profile.profile_picture}`}
                  />
                ) : profile.logo ? (
                  <img className="search__photo" src={`${profile.logo}`} />
                ) : (
                  <div className="search__photo">
                    <FaUserCircle />
                  </div>
                )}
                <div className="search__text">
                  {profile.first_name ? (
                    <div className="search__name">{`${profile.first_name} ${profile.last_name}`}</div>
                  ) : (
                    <div className="search__name">{profile.name}</div>
                  )}
                </div>
                <div className="search__separator">
                  <BsDot />
                </div>
                <div className="search__headline">
                  {profile.headline ? profile.headline : ""}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
