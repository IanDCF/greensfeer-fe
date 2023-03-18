import { AiOutlineMessage } from "react-icons/ai";
import "./AppNavbar.scss";
import Searchbar from "../Searchbar/Searchbar";
import ProfilePhoto from "../../assets/images/Mohan-muruge.jpg";
import { FiEdit } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const AppNavbar: React.FC = () => {
  const photoStyle = {
    background: `url(${ProfilePhoto}) center/cover no-repeat`,
  };

  const location = useLocation();
  const isChatPath = location.pathname.includes("/messages");

  return (
    <header className="navbar">
      <nav className="navbar__wrapper">
        <div className="navbar__profile">
          <div className="navbar__img" style={photoStyle}></div>
        </div>
        <div className="navbar__searchbar">
          <Searchbar />
        </div>
        {!isChatPath && (
          <div className="navbar__message">
            <AiOutlineMessage className="navbar__icon" />
          </div>
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
