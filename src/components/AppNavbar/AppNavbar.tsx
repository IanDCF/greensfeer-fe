import { RxAvatar } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";
import "./AppNavbar.scss";
import Searchbar from "../Searchbar/Searchbar";

const AppNavbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__wrapper">
        <div className="navbar__profile">
          <RxAvatar className="navbar__icon" />
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
