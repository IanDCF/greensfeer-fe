import { ProfileHeader } from "src/components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "src/components/ProfileAbout/ProfileAbout";
import { Affiliations } from "src/components/Affiliations/Affiliations";
import { ContentPosts } from "src/components/ContentPosts/ContentPosts";

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
