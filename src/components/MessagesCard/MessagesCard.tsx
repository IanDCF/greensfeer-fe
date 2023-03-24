import "./MessagesCard.scss";
import ProfilePhoto from "/assets/images/Mohan-muruge.jpg";
import inboxList from "./MessagesData.json";

const MessagesCard: React.FC = () => {
  const photoStyle: React.CSSProperties = {
    background: `url(${ProfilePhoto}) center/cover no-repeat`,
  };

  const truncate = (string: string, maxLength: number) => {
    if (string.length > maxLength) {
      return string.substring(0, maxLength) + "...";
    } else {
      return string;
    }
  };

  const selectChatId = 1;

  return (
    <>
      {inboxList.map((conversation) => (
        <div
          key={conversation.conversation_id}
          className={`messages-card ${
            selectChatId === conversation.conversation_id
              ? "messages-card--selected"
              : ""
          }`}
        >
          <div className="messages-card__user">
            <div className="messages-card__profile">
              <div className="messages-card__photo" style={photoStyle}></div>
            </div>

            <div className="messages-card__details">
              <h4 className="messages-card__name">{conversation.members[1]}</h4>

              <p className="messages-card__message">
                {truncate(conversation.last_message, 62)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessagesCard;
