import "./UserMenu.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/AuthProvider";

const UserMenu = () => {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
      console.log("User has been signed out");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="user-menu">
      <Link to={`/gs/${currentUser?.uid}`} className="user-menu__item">
        My Profile
      </Link>
      <div className="user-menu__item" onClick={handleSignOut}>
        Sign Out
      </div>
    </div>
  );
};

export default UserMenu;
