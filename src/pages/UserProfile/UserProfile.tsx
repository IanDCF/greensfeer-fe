import AppNavbar from "../../components/AppNavbar/AppNavbar";
import NavBottom from "../../components/AppNavbar/NavBottom";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { Affiliations } from "../../components/Affiliations/Affiliations";
import { ContentPosts } from "../../components/ContentPosts/ContentPosts";

export const UserProfile: React.FC = () => {
  return (
    <>
      <AppNavbar />
      <div className="profile">
        <ProfileHeader />
        <ProfileAbout />
        <Affiliations />
        <ContentPosts />
      </div>
      <NavBottom />
    </>
  );
};
