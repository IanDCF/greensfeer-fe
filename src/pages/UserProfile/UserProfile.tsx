import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { ProfileAffiliations } from "../../components/ProfileAffiliations/ProfileAffiliations";
import { PostsList } from "../../components/PostsList/PostsList";
import "./UserProfile.scss";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import axios from "axios";
import { useState, useEffect } from "react";
import { IUser } from "customTypes";
import UserModal from "../../components/Modal/Modal";

export const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<IUser>();
  const { currentUser } = useAuth();
  const [token, setToken] = useState<string>();
  const [openCompanyModal, setOpenCompanyModal] = useState<boolean>(true);

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
        <ProfileAffiliations />
        {/* <PostsList /> */}
        <PostsList />
        <UserModal open={openCompanyModal} />
      </div>
    </>
  );
};
