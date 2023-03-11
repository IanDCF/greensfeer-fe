import { FC } from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import logo from "../../assets/logos/greensfeer-logo.png";

interface LogoProps {
  className?: string;
  toggleHome?: () => void;
  to?: string;
}

const Logo: FC<LogoProps> = ({ toggleHome }) => {
  return (
    <Link className="logo" to="/" onClick={toggleHome && toggleHome}>
      <img src={logo} alt="Greensfeer Logo" className="logo__icon" />
      <div className="logo__text">Greensfeer</div>
    </Link>
  );
};

export default Logo;
