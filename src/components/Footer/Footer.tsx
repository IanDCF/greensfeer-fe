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
        {/* <div className="footer__links">
          <div className="footer__links-obj">
            <div className="footer__links-title">About Us</div>
            <a
              className="footer__link"
              href="https://www.youtube.com/@greensfeer/playlists"
              target="_blank"
              rel="noreferrer"
            >
              Mission
            </a>
          </div>
          <div className="footer__links-obj">
            <div className="footer__links-title">Stakeholders</div>
            <a
              className="footer__link"
              href="https://www.youtube.com/@greensfeer/playlists"
              target="_blank"
              rel="noreferrer"
            >
              Product
            </a>
          </div>
          <div className="footer__links-obj">
            <div className="footer__links-title">Resources</div>
            <a
              className="footer__link"
              href="https://www.youtube.com/@greensfeer/playlists"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
          <div className="footer__links-obj">
            <div className="footer__links-title">Contact</div>
            <a className="footer__link" href="mailto:info@greensfeer.com">
              info@greensfeer.com
            </a>
          </div>
        </div> */}
        <div className="footer__div">
          <div className="footer__logo">
            <Link to="/" onClick={toggleHome}>
              Greensfeer
            </Link>
          </div>
          <div className="footer__copy">
            <p>Greensfeer © 2023 All rights reserved</p>
          </div>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/company/greensfeer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer__icon"
            >
              <FaLinkedin />
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
              href="https://www.youtube.com/@greensfeer/playlists"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
              className="footer__icon"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:info@greensfeer.com"
              aria-label="Email"
              className="footer__icon"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
