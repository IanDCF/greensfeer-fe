import "./AppNavMobile.scss";
import Searchbar from "../Searchbar/Searchbar";
import PlaceholderPhoto from "../../assets/images/placeholder-photo.png";
import { Link, useLocation } from "react-router-dom";
import MarketplaceSearch from "../Searchbar/MarketplaceSearch";
import Logo from "../../assets/logos/greensfeer-logo.png";
import { FaUserCircle } from "react-icons/fa";
import UserMenu from "../UserMenu/UserMenu";

const AppNavMobile: React.FC = () => {
  const photoStyle = {
    background: `url(${PlaceholderPhoto}) center/cover no-repeat`,
  };

  const location = useLocation();
  // const isChatPath = location.pathname.includes("/messages");
  const isMarketplacePath = location.pathname.includes("/marketplace");

  return (
    <header className="nav-mobile">
      <nav className="nav-mobile__wrapper">
        <Link to="/marketplace" className="nav-mobile__link">
          <img className="nav-mobile__img" src={Logo} />
        </Link>
        <div className="nav-mobile__searchbar">
          {isMarketplacePath ? <MarketplaceSearch /> : <Searchbar />}
        </div>
        <Link to="/profile" className="nav-mobile__link">
          {/* render conditionally */}
          {/* <div className="nav-mobile__img" style={photoStyle}
           /> */}
          <div className="nav-mobile__img">
            <FaUserCircle />
            <div className="nav-mobile__user-menu">
              <UserMenu />
            </div>
          </div>
        </Link>
        {/* {!isChatPath && (
          <Link to="/messages" className="nav-mobile__link">
            <AiOutlineMessage className="nav-mobile__icon" />
          </Link>
        )}
        {isChatPath && (
          <div className="nav-mobile__link">
            <FiEdit className="nav-mobile__icon-newmsg" />
          </div>
        )} */}
      </nav>
    </header>
  );
};

export default AppNavMobile;
