import "./UserMenu.scss";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="user-menu">
      <Link to="/profile" className="user-menu__item">
        My Profile
      </Link>
      <div className="user-menu__item">Sign Out</div>
    </div>
  );
};

export default UserMenu;
