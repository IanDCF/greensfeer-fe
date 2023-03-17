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
          <div className="network__title">Pending</div>
          <div className="network__pending">
            <ContactCard pending={true} />
            <ContactCard pending={true} />
          </div>
          <div className="network__title">Contacts</div>
          <div className="network__connections">
            <ContactCard pending={false} />
            <ContactCard pending={false} />
          </div>
        </div>
      </div>
      <NavBottom />
    </div>
  );
};

export default Network;
