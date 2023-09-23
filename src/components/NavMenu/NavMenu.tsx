import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./NavMenu.scss";
import { v4 as uuidv4 } from "uuid";

interface NavMenuProps {
  open: boolean;
  toggle: () => void;
}

interface NavLink {
  name: string;
  id: string;
}

const NavMenu: FC<NavMenuProps> = ({ open, toggle }) => {
  const navLinks: NavLink[] = [
    { name: "Discover", id: "discover" },
    { name: "Community", id: "community" },
    { name: "Greensfeer Beta", id: "beta" },
  ];

  return (
    <aside className={`nav-menu ${open && "nav-menu--open"}`}>
      <div className="nav-menu__icon-div" onClick={toggle}>
        <FaTimes className="nav-menu__icon" />
      </div>

      <div className="nav-menu__wrap">
        <ul className="nav-menu__links">
          {navLinks.map((link) => {
            return (
              <li key={uuidv4()} className="nav-menu__links-item">
                <LinkS
                  className="nav-menu__links-a"
                  to={link.id}
                  smooth={true}
                  duration={400}
                  spy={true}
                  offset={-79}
                  onClick={toggle}
                >
                  {link.name}
                </LinkS>
              </li>
            );
          })}
        </ul>

        <div className="nav-menu__btn">
          <Link to="/register" className="nav-menu__btn-reg" onClick={toggle}>
            Register
          </Link>
          <Link to="/signin" className="nav-menu__btn-in">
            Sign In
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default NavMenu;
