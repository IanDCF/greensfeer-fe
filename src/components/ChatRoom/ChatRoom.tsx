import { RiArrowGoBackLine } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import { BiAddToQueue } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
import "./ChatRoom.scss";

const ChatRoom = () => {
  return (
    <div className="chatroom">
      <header className="chatroom__header">
        <nav className="chatroom__wrapper">
          <div className="chatroom__return">
            <RiArrowGoBackLine />
          </div>

          <div className="chatroom__addressee">
            <div className="chatroom__name">Romina Cain</div>
            <div className="chatroom__details">3h ago</div>
          </div>

          <div className="chatroom__options">
            <IoIosMore />
          </div>
        </nav>
      </header>

      <section className="chatroom__messages">
        <div className="chatroom__text chatroom__received">
          Hey man what's going on today?
        </div>
        <div className="chatroom__text chatroom__sent">
          not much man wanna grab a beer
        </div>
        <div className="chatroom__text chatroom__received">
          jees man your twistin my arm, let's do it
        </div>
        <div className="chatroom__text chatroom__sent">
          Same pub as last time?
        </div>
        <div className="chatroom__text chatroom__received">you got it</div>
        <div className="chatroom__text chatroom__sent">see you at 8</div>
      </section>

      <footer className="chatroom__footer">
        <div className="chatroom__icon">
          <BiAddToQueue />
        </div>
        <div className="chatroom__textbox">
          <input
            type="text"
            className="chatroom__input"
            placeholder="New Message..."
          />
        </div>
        <div className="chatroom__icon">
          <TbSend />
        </div>
      </footer>
    </div>
  );
};

export default ChatRoom;
