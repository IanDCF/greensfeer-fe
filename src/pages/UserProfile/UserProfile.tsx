import AppNavbar from "../../components/AppNavbar/AppNavbar";
import NavBottom from "../../components/AppNavbar/NavBottom";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { Affiliations } from "../../components/Affiliations/Affiliations";
import { ContentPosts } from "../../components/ContentPosts/ContentPosts";
import ProfileData from "../../data/UserProfile.json";

interface ProfileProps {
  first_name: string;
  last_name: string;
  headline: string;
  location: {
    city: string;
    state_province: string;
    country: string;
  };
  profile_picture: string;
  profile_banner: string;
  about: string;
}
export const UserProfile: React.FC = () => {
  return (
    <>
      <AppNavbar />
      <div className="profile">
        <ProfileHeader ProfileData={ProfileData} />
        <ProfileAbout />
        <Affiliations />
        <ContentPosts />
      </div>
      <NavBottom />
    </>
  );
};
