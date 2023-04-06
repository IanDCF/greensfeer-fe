import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { ProfileAffiliations } from "../../components/ProfileAffiliations/ProfileAffiliations";
import "./UserProfile.scss";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import axios from "axios";
import { useState, useEffect, MouseEventHandler } from "react";
import { IUser } from "customTypes";
import PromptModal from "../../components/PromptModal/PromptModal";

export const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<IUser>();
  const { currentUser } = useAuth();
  const [token, setToken] = useState<string>();
  const [openCompanyModal, setOpenCompanyModal] = useState<boolean>(true);
  const clickHandler: MouseEventHandler = () => {
    setOpenCompanyModal(false);
  };

  useEffect(() => {
    async function fetchProfile() {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        setToken(token);
        const response = await axios.get(
          "http://127.0.0.1:5001/greensfeer-db-dd101/us-central1/app/api/user/current",
          {
            headers: {
              bearerToken: token,
              "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
            },
          }
        );
        console.log(response.data);
        setProfile(response.data);
      } else {
        console.log("No current user logged in");
      }
    }
    fetchProfile();
  }, [currentUser]);

  return (
    <>
      <div className="user-profile-container">
        <ProfileHeader ProfileData={profile} user={true} />
        <ProfileAbout ProfileData={profile} user={true} />
        {/* {profile && console.log(profile)} */}
        <ProfileAffiliations userType="current" />
        <PromptModal open={openCompanyModal} clickHandler={clickHandler} />
      </div>
    </>
  );
};
