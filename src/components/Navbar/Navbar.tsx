import { FC } from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import { v4 as uuidv4 } from "uuid";

interface LinkItem {
  name: string;
  id: string;
}

interface NavbarProps {
  toggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ toggle }) => {
  const navLinks: LinkItem[] = [
    { name: "Discover", id: "discover" },
    { name: "Community", id: "community" },
    { name: "Greensfeer Beta", id: "beta" },
    // { name: "Collaborate", id: "collaborate" },
  ];

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav-container">
      <div className="nav">
        <Logo className="nav__logo" toggleHome={toggleHome} />

        <div className="nav__icon-div" onClick={toggle}>
          <FaBars className="nav__icon" />
        </div>

        <ul className="nav__links">
          {navLinks.map((link) => {
            return (
              <li key={uuidv4()} className="nav__links-item">
                <LinkS
                  to={link.id}
                  className="nav__links-a"
                  smooth={true}
                  duration={400}
                  spy={true}
                  // exact={true}
                  offset={-79}
                >
                  {link.name}
                </LinkS>
              </li>
            );
          })}
        </ul>

        <nav className="nav__btn">
          <Link to="/register" className="nav__btn-reg">
            Register
          </Link>
          <Link to="/signin" className="nav__btn-in">
            Sign In
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
