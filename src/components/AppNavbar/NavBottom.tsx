import "./AppNavbar.scss";
import { BsHouse } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiNotification4Line } from "react-icons/ri";
import { BsShop } from "react-icons/bs";

const NavBottom = () => {
  return (
    <footer className="navbar">
      <nav className="navbar__wrapper">
        <div className="navbar__div">
          <BsHouse className="navbar__icon" />
        </div>
        <div className="navbar__div">
          <AiOutlineUsergroupAdd className="navbar__icon" />
        </div>
        <div className="navbar__div">
          <IoMdAddCircleOutline className="navbar__icon" />
        </div>
        <div className="navbar__div">
          <RiNotification4Line className="navbar__icon" />
        </div>
        <div className="navbar__div">
          <BsShop className="navbar__icon" />
        </div>
      </nav>
    </footer>
  );
};

export default NavBottom;
