import React from "react";
import InfoText from "./InfoText";
import InfoImg from "./InfoImg";
import "./Info.scss";

interface Props {
  data: {
    id: string;
    darkMode: boolean;
    topLine: string;
    headline: string;
    description: string;
    buttonText: string;
    link: string;
    alt: string;
  };
}

const Info: React.FC<Props> = ({ data }) => {
  return (
    <section
      className={`info-container ${
        data.darkMode ? "info-container--dark" : "info-container--light"
      }`}
      id={data.id}
    >
      <div className={`info ${!data.darkMode && "info--reverse"}`}>
        <div className="info__text">
          <InfoText
            darkMode={data.darkMode}
            topLine={data.topLine}
            headline={data.headline}
            description={data.description}
            buttonText={data.buttonText}
            link={data.link}
          />
        </div>
        <div className="info__image">
          <InfoImg dataId={data.id} alt={data.alt} />
        </div>
      </div>
    </section>
  );
};

export default Info;
