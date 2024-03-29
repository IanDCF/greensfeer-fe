import "./Footer.scss";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = (): JSX.Element => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer__div">
          <div className="footer__logo">
            <Link to="/" onClick={toggleHome}>
              Greensfeer
            </Link>
          </div>
          <div className="footer__copy">
            <p>© 2023 Greensfeer, All rights reserved.</p>
          </div>
          <div className="footer__socials">
            <a
              href="mailto:greensfeer@gmail.com"
              aria-label="Email"
              className="footer__icon"
            >
              <MdEmail />
            </a>
            <a
              href="https://www.youtube.com/@greensfeer/playlists"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
              className="footer__icon"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/greensfeer"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="footer__icon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/greensfeer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer__icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
