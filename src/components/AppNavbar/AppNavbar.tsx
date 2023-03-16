import { AiOutlineMessage } from "react-icons/ai";
import "./AppNavbar.scss";
import Searchbar from "../Searchbar/Searchbar";
import ProfilePhoto from "../../assets/images/Mohan-muruge.jpg";

const AppNavbar = () => {
  const photoStyle = {
    background: `url(${ProfilePhoto}) center/cover no-repeat`,
  };
  return (
    <header className="navbar">
      <nav className="navbar__wrapper">
        <div className="navbar__profile">
          <div className="navbar__img" style={photoStyle}></div>
        </div>
        <div className="navbar__searchbar">
          <Searchbar />
        </div>
        <div className="navbar__message">
          <AiOutlineMessage className="navbar__icon" />
        </div>
      </nav>
    </header>
  );
};

export default AppNavbar;
