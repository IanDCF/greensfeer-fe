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
  const [profile, setProfile] = useState<IUser>();
  const { currentUser } = useAuth();
  const [token, setToken] = useState<string>();
  const [openPromptModal, setOpenPromptModal] = useState<boolean>(false);
  const [headerModal, setHeaderModal] = useState<boolean>(false);
  const [aboutModal, setAboutModal] = useState<boolean>(false);
  const [affiliationsModal, setAffiliationsModal] = useState<boolean>(false);

  const promptHandler: MouseEventHandler = () => {
    setOpenPromptModal(false);
  };

  const editHeaderHandler: MouseEventHandler = () => {
    setHeaderModal(!headerModal);
  };

  const editAboutHandler: MouseEventHandler = () => {
    setAboutModal(!aboutModal);
  };

  const editAffiliationsHandler: MouseEventHandler = () => {
    setAffiliationsModal(!affiliationsModal);
    localStorage.setItem("ListingModalSeen", "yes");
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
    if (!localStorage.getItem("ListingModalSeen")) {
      setTimeout(() => {
        setOpenCompanyModal(true);
      }, 3000);
    }
  }, [currentUser]);

  return (
    <>
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
        {/* {profile && console.log(profile)} */}
        <ProfileAffiliations
          userType="current"
          editing={true}
          editAffiliationsHandler={editAffiliationsHandler}
        />
        <PromptModal open={openPromptModal} clickHandler={promptHandler} />
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
    </>
  );
};
