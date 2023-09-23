import "./MessagesCard.scss";
import ProfilePhoto from "../../assets/images/Mohan-muruge.jpg";

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

  return <></>;
};

export default MessagesCard;
