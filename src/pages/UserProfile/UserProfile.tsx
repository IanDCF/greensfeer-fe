import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { ProfileAffiliations } from "../../components/ProfileAffiliations/ProfileAffiliations";
import "./UserProfile.scss";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import axios from "axios";
import { useState, useEffect, MouseEventHandler } from "react";
import { IUser } from "customTypes";
import PromptModal from "../../components/PromptModal/PromptModal";
import { EditHeaderModal } from "../../components/EditUserProfile/EditHeaderModal";
import { EditAboutModal } from "../../components/EditUserProfile/EditAboutModal";
import { EditAffiliationsModal } from "../../components/EditUserProfile/EditAffiliationsModal";

export const UserProfile: React.FC = () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  const [profile, setProfile] = useState<IUser>();
  const { currentUser } = useAuth();
  const [token, setToken] = useState<string>();
  const [openCompanyModal, setOpenCompanyModal] = useState<boolean>(false);
  const [headerModal, setHeaderModal] = useState<boolean>(false);
  const [aboutModal, setAboutModal] = useState<boolean>(false);
  const [affiliationsModal, setAffiliationsModal] = useState<boolean>(false);

  const promptHandler: MouseEventHandler = () => {
    setOpenCompanyModal(false);
    localStorage.setItem("ListingModalSeen", "yes");
  };

  const editHeaderHandler: MouseEventHandler = () => {
    setHeaderModal(!headerModal);
  };

  const editAboutHandler: MouseEventHandler = () => {
    setAboutModal(!aboutModal);
  };

  const editAffiliationsHandler: MouseEventHandler = () => {
    setAffiliationsModal(!affiliationsModal);
  };

  useEffect(() => {
    async function fetchProfile() {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        setToken(token);
        const response = await axios.get(`${URL_BASE}/user/current`, {
          headers: {
            bearerToken: token,
            "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
          },
        });
        setProfile(response.data);
      } else {
        console.log("No user detected");
      }
    }
    fetchProfile();
    if (!localStorage.getItem("ListingModalSeen")) {
      setTimeout(() => {
        setOpenCompanyModal(true);
      }, 3000);
    }
  }, [currentUser]);

  return (
    <>
      {profile ? (
        <div className="user-profile-container">
          <ProfileHeader
            ProfileData={profile}
            user={true}
            editing={true}
            editHeaderHandler={editHeaderHandler}
          />
          <ProfileAbout
            ProfileData={profile}
            user={true}
            editing={true}
            editAboutHandler={editAboutHandler}
          />
          <ProfileAffiliations
            userType="current"
            editing={true}
            editAffiliationsHandler={editAffiliationsHandler}
          />
          <PromptModal open={openCompanyModal} clickHandler={promptHandler} />
          <EditHeaderModal
            openModal={headerModal}
            editHeaderHandler={editHeaderHandler}
          />
          <EditAboutModal
            openModal={aboutModal}
            editAboutHandler={editAboutHandler}
          />
          <EditAffiliationsModal
            openModal={affiliationsModal}
            editAffiliationsHandler={editAffiliationsHandler}
          />
        </div>
      ) : (
        <div className="user-profile-loading">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};
