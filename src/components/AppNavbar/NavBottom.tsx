import "./AppNavbar.scss";
import { BsHouse } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiNotification4Line } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBottom = () => {
  return (
    <footer className="navbar-bottom">
      <nav className="navbar__wrapper">
        <Link to="/feed" className="navbar__div">
          <BsHouse className="navbar__icon" />
        </Link>
        <Link to="/network" className="navbar__div">
          <AiOutlineUsergroupAdd className="navbar__icon" />
        </Link>
        <div className="navbar__div">
          <IoMdAddCircleOutline className="navbar__icon" />
        </div>
        <Link to="/notifications" className="navbar__div">
          <RiNotification4Line className="navbar__icon" />
        </Link>
        <Link to="/marketplace" className="navbar__div">
          <BsShop className="navbar__icon" />
        </Link>
      </nav>
    </footer>
  );
};

export default NavBottom;
