import "./ContactCard.scss";
import ProfilePhoto from "../../assets/images/Mohan-muruge.jpg";
interface ContactCardProps {
  pending: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({ pending }) => {
  const photoStyle: React.CSSProperties = {
    background: `url(${ProfilePhoto}) center/cover no-repeat`,
  };
  return (
    <div className="contact-card">
      <div className="contact-card__user">
        <div className="contact-card__profile">
          <div className="contact-card__photo" style={photoStyle}></div>
        </div>

        <div className="contact-card__details">
          <div className="contact-card__text">
            <h4 className="contact-card__name">Richard Johnson</h4>
            <p className="contact-card__role">
              Supplier | Ecological Prjoect Developer
            </p>
          </div>

          <div className="contact-card__text">
            <p className="contact-card__location">Inuivk, NWT, Canada</p>
          </div>
        </div>
      </div>

      {pending ? (
        <div className="contact-card__controls">
          <div className="contact-card__btn-white">Decline</div>
          <div className="contact-card__btn-green">Accept</div>
        </div>
      ) : (
        <div className="contact-card__controls">
          <div className="contact-card__label">Connection</div>
          <div className="contact-card__btn-green">Message</div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
