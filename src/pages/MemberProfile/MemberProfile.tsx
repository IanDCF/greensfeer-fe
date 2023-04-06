import "./MemberProfile.scss";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { ProfileAffiliations } from "../../components/ProfileAffiliations/ProfileAffiliations";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import axios from "axios";
import { useState, useEffect, MouseEventHandler } from "react";
import { IUser } from "customTypes";
import PromptModal from "../../components/PromptModal/PromptModal";

const getUserIdFromUrl = (url: string): string | null => {
  const regex = /^\/gs\/(\w+)$/; // Regular expression to match the URL pattern
  const match = url.match(regex); // Try to match the URL with the regular expression

  if (match && match.length > 1) {
    return match[1]; // Extract the userId from the regex match
  }

  return null; // Return null if no match is found
};

export const MemberProfile: React.FC = () => {
  const [profile, setProfile] = useState<IUser>();

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = getUserIdFromUrl(window.location.pathname); // Get userId from the URL path
      if (userId) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:5001/greensfeer-db-dd101/us-central1/app/api/user/${userId}`
          );
          if (response.status === 200) {
            setProfile(response.data);
          } else {
            console.error("Failed to fetch profile");
          }
        } catch (error) {
          console.error("Failed to fetch profile", error);
        }
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <div className="member-profile-container">
        <ProfileHeader ProfileData={profile} user={true} />
        <ProfileAbout ProfileData={profile} user={true} />
        {/* {profile && console.log(profile)} */}
        <ProfileAffiliations />
      </div>
    </>
  );
};

export default MemberProfile;
