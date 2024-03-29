import "./AppNavMobile.scss";
import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Link, useLocation } from "react-router-dom";
import MarketplaceSearch from "../Searchbar/MarketplaceSearch";
import Logo from "../../assets/logos/greensfeer-logo.png";
import { FaUserCircle } from "react-icons/fa";
import UserMenu from "../UserMenu/UserMenu";

const AppNavMobile: React.FC = () => {
  const location = useLocation();
  const isMarketplacePath = location.pathname.includes("/marketplace");

  // state to keep track of whether user menu is open or not
  const [showUserMenu, setShowUserMenu] = useState(false);

  // function to toggle user menu
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="nav-mobile">
      <nav className="nav-mobile__wrapper">
        <Link to="/marketplace" className="nav-mobile__link">
          <img className="nav-mobile__img" src={Logo} />
        </Link>
        <div className="nav-mobile__searchbar">
          {isMarketplacePath ? <MarketplaceSearch /> : <Searchbar />}
        </div>
        <div className="nav-mobile__link">
          <div className="nav-mobile__img" onClick={toggleUserMenu}>
            <FaUserCircle />
            {showUserMenu && (
              <div className="nav-mobile__user-menu">
                <UserMenu />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppNavMobile;
