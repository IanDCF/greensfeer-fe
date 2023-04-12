import "./MemberProfile.scss";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { ProfileAffiliations } from "../../components/ProfileAffiliations/ProfileAffiliations";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import axios from "axios";
import { useState, useEffect, MouseEventHandler } from "react";
import { IUser } from "customTypes";
import PromptModal from "../../components/PromptModal/PromptModal";
import { useParams } from "react-router-dom";

export const MemberProfile: React.FC = () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  const [profile, setProfile] = useState<IUser>();
  const { user_id } = useParams(); // Get userId from the URL path

  useEffect(() => {
    const fetchProfile = async () => {
      if (user_id) {
        try {
          const response = await axios.get(`${URL_BASE}/user/${user_id}`);
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
  }, [user_id]);

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
