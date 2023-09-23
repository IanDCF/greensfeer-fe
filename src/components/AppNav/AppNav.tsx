import "./AppNav.scss";
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Link, useLocation } from "react-router-dom";
import MarketplaceSearch from "../Searchbar/MarketplaceSearch";
import Logo from "../../assets/logos/greensfeer-logo.png";
import { FaUserCircle } from "react-icons/fa";
import UserMenu from "../UserMenu/UserMenu";
import { getAuth } from "firebase/auth";
import axios from "axios";

const AppNav: React.FC = () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  const location = useLocation();
  const { currentUser } = getAuth();
  const isMarketplacePath = location.pathname.includes("/marketplace");

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [pic, setPic] = useState<string>("");
  useEffect(() => {
    //get call
    const fetchProfile = async () => {
      const token = await currentUser?.getIdToken();
      const response = await axios.get(`${URL_BASE}/user/current`, {
        headers: {
          bearerToken: token,
          "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
        },
      });

      setPic(await response.data.profile_picture);
    };
    fetchProfile();
  }, []);

  const handleUserMenuClick = () => {
    setShowUserMenu(!showUserMenu);
  };

  const pictureStyle: (picture: string) => React.CSSProperties = (picture) => {
    return { background: `url(${picture}) center/cover no-repeat` };
  };

  return (
    <header className="appnav">
      <nav className="appnav__wrapper">
        <div className="appnav__search">
          <Link to="/marketplace" className="appnav__link">
            <img className="appnav__img" src={Logo} />
          </Link>
          <div className="appnav__searchbar">
            {isMarketplacePath ? <MarketplaceSearch /> : <Searchbar />}
          </div>
        </div>

        <div className="appnav__links">
          <div className="appnav__link" onClick={handleUserMenuClick}>
            {pic ? (
              <div
                className="appnav__display-picture"
                style={pictureStyle(pic)}
              />
            ) : (
              <FaUserCircle className="appnav__icon" />
            )}
            {showUserMenu && (
              <div className="appnav__user-menu">
                <UserMenu />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppNav;
