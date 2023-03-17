import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { Affiliations } from "../../components/Affiliations/Affiliations";
import { MarketThumbnails } from "../../components/MarketThumbnails/MarketThumbnails";
import ProfileData from "../../data/CompanyProfile.json";
import MarketPosts from "../../data/MarketPosts.json";
import { useEffect, useState } from "react";
import "./CompanyProfile.scss";

const product = MarketPosts.filter((post) => post.p);
const service = MarketPosts.filter((post) => !post.p);
export const CompanyProfile: React.FC = () => {
  const [products, setProducts] = useState(product);
  const [services, setServices] = useState(service);
  //   useEffect(setProducts(MarketPosts.filter((post) => post.p)), []);
  return (
    <>
      <div className="profile">
        <ProfileHeader ProfileData={ProfileData} />
        <ProfileAbout ProfileData={ProfileData} />
        {/* <Affiliations /> */}
        <MarketThumbnails posts={products} title={"Products"} />
        <MarketThumbnails posts={services} title={"Services"} />
      </div>
    </>
  );
};
