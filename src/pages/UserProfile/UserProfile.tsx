import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { ProfileAffiliations } from "../../components/ProfileAffiliations/ProfileAffiliations";
import { PostsList } from "../../components/PostsList/PostsList";
import ProfileData from "../../data/UserProfile.json";
import "./UserProfile.scss";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import axios from "axios";

interface ProfileData {
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
  const { currentUser } = useAuth();
  if (currentUser) {
    currentUser.getIdToken().then((idToken) => {
      axios
        .post("http://127.0.0.1:5001/greensfeer-db-dd101/us-central1/app", {
          token: idToken,
        }) //each backend request will require sending token
        .then(console.log(currentUser));
    });
  }
  // useEffect({
  //   })
  // },[])
  return (
    <>
      <div className="user-profile-container">
        <ProfileHeader ProfileData={ProfileData} user={true} />
        <ProfileAbout ProfileData={ProfileData} user={true} />
        {currentUser ? console.log(currentUser.getIdToken()) : <p>no user</p>}
        <ProfileAffiliations />
        <PostsList />
      </div>
    </>
  );
};
