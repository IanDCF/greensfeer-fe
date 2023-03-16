import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { Affiliations } from "../../components/Affiliations/Affiliations";
import { ContentPosts } from "../../components/ContentPosts/ContentPosts";

export const UserProfile: React.FC = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileAbout />
      <Affiliations />
      <ContentPosts />
    </div>
  );
};
