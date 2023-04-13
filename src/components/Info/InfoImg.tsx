import React from "react";
import P1 from "../../assets/images/Marketplace.png";
import P2 from "../../assets/images/comunity.png";
import P3 from "../../assets/images/CompanyProfile.png";
import P4 from "../../assets/images/build-websites.png";
import "./InfoImg.scss";

interface Props {
  dataId: string;
  alt: string;
}

const InfoImg: React.FC<Props> = ({ dataId, alt }) => {
  const imgObj = [
    {
      id: "discover",
      img: P1,
    },
    {
      id: "community",
      img: P2,
    },
    {
      id: "beta",
      img: P3,
    },
    {
      id: "collaborate",
      img: P4,
    },
  ];

  const getImg = (id: string): string => {
    const obj = imgObj.find((img) => img.id === id);
    return obj ? obj.img : "";
  };

  return (
    <div className="image-container">
      <img className="image" src={getImg(dataId)} alt={alt} />
    </div>
  );
};

export default InfoImg;
