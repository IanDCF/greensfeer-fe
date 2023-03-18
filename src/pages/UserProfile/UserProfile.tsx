import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { ProfileAffiliations } from "../../components/ProfileAffiliations/ProfileAffiliations";
import { PostsList } from "../../components/PostsList/PostsList";
import ProfileData from "../../data/UserProfile.json";
import "./UserProfile.scss";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
interface UserProps {
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
export const UserProfile: React.FC<UserProps> = () => {
  return (
    <>
      <div className="user-profile-container">
        <ProfileHeader ProfileData={ProfileData} user={true} />
        <ProfileAbout ProfileData={ProfileData} user={true} />
        <ProfileAffiliations />
        <PostsList />
      </div>
    </>
  );
};
