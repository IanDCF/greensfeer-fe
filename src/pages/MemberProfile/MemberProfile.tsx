import "./MemberProfile.scss";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { ProfileAffiliations } from "../../components/ProfileAffiliations/ProfileAffiliations";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import { IUser } from "customTypes";
import { useParams } from "react-router-dom";

export const MemberProfile: React.FC = () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  const [profile, setProfile] = useState<IUser>();
  const { user_id } = useParams();

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
      {profile ? (
        <div className="member-profile-container">
          <ProfileHeader ProfileData={profile} user={true} />
          <ProfileAbout ProfileData={profile} user={true} />
          <ProfileAffiliations />
        </div>
      ) : (
        <div className="user-profile-loading">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default MemberProfile;
