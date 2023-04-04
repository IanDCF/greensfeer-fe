import "./UserMenu.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const UserMenu = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/");
      console.log("User has been signed out");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="user-menu">
      <Link to="/profile" className="user-menu__item">
        My Profile
      </Link>
      <div className="user-menu__item" onClick={handleSignOut}>
        Sign Out
      </div>
    </div>
  );
};

export default UserMenu;
