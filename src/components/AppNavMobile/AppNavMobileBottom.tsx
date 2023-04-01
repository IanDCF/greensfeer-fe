import "./AppNavMobile.scss";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

const AppNavMobileBottom = () => {
  return (
    <footer className="nav-mobile-bottom">
      <nav className="nav-mobile__wrapper">
        <Link to="#" className="nav-mobile__div">
          <HiOutlineHome className="nav-mobile__icon" />
        </Link>
        <Link to="#" className="nav-mobile__div">
          <HiOutlineUserGroup className="nav-mobile__icon" />
        </Link>
        <div className="nav-mobile__div">
          <IoIosAddCircleOutline className="nav-mobile__icon" />
        </div>
        <Link to="#" className="nav-mobile__div">
          <IoMdNotificationsOutline className="nav-mobile__icon" />
        </Link>
        <Link to="#" className="nav-mobile__div">
          <BsShop className="nav-mobile__icon" />
        </Link>
      </nav>
    </footer>
  );
};

export default AppNavMobileBottom;
