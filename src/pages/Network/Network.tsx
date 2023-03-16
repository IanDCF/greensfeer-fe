import ContactCard from "../../components/ContactCard/ContactCard";
import AppNavbar from "../../components/AppNavbar/AppNavbar";
import "./Network.scss";
import NavBottom from "../../components/AppNavbar/NavBottom";
const Network = () => {
  return (
    <div className="network-container">
      <AppNavbar />
      <div className="network">
        <div className="network__contacts">
          <div className="network__title">Contacts</div>
          <div className="network__pending">
            <ContactCard />
            <ContactCard />
          </div>
          <div className="network__connections">
            <ContactCard />
            <ContactCard />
          </div>
        </div>
      </div>
      <div className="network-nav-bottom">
        <NavBottom />
      </div>
    </div>
  );
};

export default Network;
