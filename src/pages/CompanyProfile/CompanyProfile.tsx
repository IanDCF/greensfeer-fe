import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { Affiliations } from "../../components/Affiliations/Affiliations";
import { MarketThumbnails } from "../../components/MarketThumbnails/MarketThumbnails";
import ProfileData from "../../data/CompanyProfile.json";
import "./CompanyProfile.scss";

export const CompanyProfile: React.FC = () => {
  return (
    <>
      <div className="profile">
        <ProfileHeader ProfileData={ProfileData} />
        <ProfileAbout ProfileData={ProfileData} />
        {/* <Affiliations /> */}
        <MarketThumbnails title={"Products"} />
        <MarketThumbnails title={"Services"} />
      </div>
    </>
  );
};
