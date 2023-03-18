import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { Affiliations } from "../../components/Affiliations/Affiliations";
import { PostThumbnail } from "../../components/PostThumbnail/PostThumbnail";
import ProfileData from "../../data/UserProfile.json";
import "./UserProfile.scss";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
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
  const ProfileData: ProfileProps = {
    first_name: "John",
    last_name: "Doe",
    headline: "Software Engineer",
    location: {
      city: "New York",
      state_province: "NY",
      country: "USA",
    },
    profile_picture: "https://example.com/profile_picture.png",
    profile_banner: "https://example.com/profile_banner.png",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <>
      <div className="user-profile-container">
        <ProfileHeader ProfileData={ProfileData} />
        <ProfileAbout ProfileData={ProfileData} />
        <Affiliations />
        <PostThumbnail />
      </div>
    </>
  );
};
