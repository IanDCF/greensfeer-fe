import "./AppNav.scss";
import Searchbar from "../Searchbar/Searchbar";
import PlaceholderPhoto from "../../assets/images/placeholder-photo.png";
import { Link, useLocation } from "react-router-dom";
import MarketplaceSearch from "../Searchbar/MarketplaceSearch";
import Logo from "../../assets/logos/greensfeer-logo.png";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const AppNav: React.FC = () => {
  const photoStyle = {
    background: `url(${PlaceholderPhoto}) center/cover no-repeat`,
  };

  const location = useLocation();
  const isMarketplacePath = location.pathname.includes("/marketplace");

  return (
    <header className="appnav">
      <nav className="appnav__wrapper">
        <Link to="/marketplace" className="appnav__link">
          <img className="appnav__img" src={Logo} />
        </Link>
        <div className="appnav__searchbar">
          {isMarketplacePath ? <MarketplaceSearch /> : <Searchbar />}
        </div>
        <div className="appnav__links">
          <Link to="#" className="appnav__link">
            <AiOutlineMessage className="appnav__icon" />
          </Link>
          <Link to="#" className="appnav__link">
            <HiOutlineUserGroup className="appnav__icon" />
          </Link>
          <Link to="#" className="appnav__link">
            <IoMdNotificationsOutline className="appnav__icon" />
          </Link>

          <Link to="/profile" className="appnav__link">
            {/* render conditionally: user profile picture or placeholder icon*/}
            {/* <div className="appnav__img" style={photoStyle}
           /> */}
            <FaUserCircle className="appnav__icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default AppNav;
