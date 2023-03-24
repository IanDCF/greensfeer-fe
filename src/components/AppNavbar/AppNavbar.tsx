import { AiOutlineMessage } from "react-icons/ai";
import "./AppNavbar.scss";
import Searchbar from "../Searchbar/Searchbar";
import ProfilePhoto from "/assets/images/Mohan-muruge.jpg";
import { FiEdit } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import MarketplaceSearch from "../MarketplaceSearch/MarketplaceSearch";

const AppNavbar: React.FC = () => {
  const photoStyle = {
    background: `url(${ProfilePhoto}) center/cover no-repeat`,
  };

  const location = useLocation();
  const isChatPath = location.pathname.includes("/messages");
  const isMarketplacePath = location.pathname.includes("/marketplace");

  return (
    <header className="navbar">
      <nav className="navbar__wrapper">
        <Link to="/profile" className="navbar__profile">
          <div className="navbar__img" style={photoStyle}></div>
        </Link>
        <div className="navbar__searchbar">
          {isMarketplacePath ? <MarketplaceSearch /> : <Searchbar />}
        </div>
        {!isChatPath && (
          <Link to="/messages" className="navbar__message">
            <AiOutlineMessage className="navbar__icon" />
          </Link>
        )}
        {isChatPath && (
          <div className="navbar__message">
            <FiEdit className="navbar__icon-newmsg" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default AppNavbar;
