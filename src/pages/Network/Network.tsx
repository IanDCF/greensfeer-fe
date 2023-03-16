import AppNavbar from "../../components/AppNavbar/AppNavbar";
import "./Network.scss";
const Network = () => {
  return (
    <>
      <AppNavbar />
      <div className="network">
        <div className="network__contacts">
          <div className="network__title">Requests</div>
          <div className="network__pending">Pending Request</div>
          <div className="network__connections">Connection</div>
        </div>

        <div className="network__recommended">
          <div className="network__title">Recommended</div>
          <div className="network__recomend-box">Recommended Contact</div>
        </div>
      </div>
    </>
  );
};

export default Network;
