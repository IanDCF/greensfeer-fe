import ContactCard from "../../components/ContactCard/ContactCard";

import "./Network.scss";

const Network = (): JSX.Element => {
  return (
    <div className="network-container">
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
    </div>
  );
};

export default Network;
