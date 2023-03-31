import "./AppNavMobile.scss";
import { BsHouse } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiNotification4Line } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

const AppNavMobileBottom = () => {
  return (
    <footer className="nav-mobile-bottom">
      <nav className="nav-mobile__wrapper">
        <Link to="/feed" className="nav-mobile__div">
          <BsHouse className="nav-mobile__icon" />
        </Link>
        <Link to="/network" className="nav-mobile__div">
          <AiOutlineUsergroupAdd className="nav-mobile__icon" />
        </Link>
        <div className="nav-mobile__div">
          <IoMdAddCircleOutline className="nav-mobile__icon" />
        </div>
        <Link to="/notifications" className="nav-mobile__div">
          <RiNotification4Line className="nav-mobile__icon" />
        </Link>
        <Link to="/marketplace" className="nav-mobile__div">
          <BsShop className="nav-mobile__icon" />
        </Link>
      </nav>
    </footer>
  );
};

export default AppNavMobileBottom;
