import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { Affiliations } from "../../components/Affiliations/Affiliations";
import { ContentPosts } from "../../components/ContentPosts/ContentPosts";
// import ProfileData from "../../data/UserProfile.json";
import "./UserProfile.scss";

export const CompanyProfile: React.FC = () => {
  return (
    <>
      <div className="profile">
        <ProfileHeader
        // ProfileData={ProfileData}
        />
        <ProfileAbout
        // ProfileData={ProfileData}
        />
        <Affiliations />
        <ContentPosts />
      </div>
    </>
  );
};
