import MessagesCard from "../../components/MessagesCard/MessagesCard";
import AppNavbar from "../../components/AppNavbar/AppNavbar";
import NavBottom from "../../components/AppNavbar/NavBottom";
import "./Messages.scss";

const Messages = () => {
  return (
    <div className="messages-container">
      <AppNavbar />
      <div className="messages">
        <MessagesCard />
      </div>
      <NavBottom />
    </div>
  );
};

export default Messages;
