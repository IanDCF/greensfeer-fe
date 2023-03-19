import MessagesCard from "../../components/MessagesCard/MessagesCard";
import "./Messages.scss";

const Messages = () => {
  return (
    <div className="messages-container">
      <div className="messages">
        <MessagesCard />
      </div>
    </div>
  );
};

export default Messages;
