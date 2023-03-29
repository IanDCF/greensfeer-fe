import axios from "axios";
import { useAuth } from "../context/AuthProvider/AuthProvider";

const getAffiliation = async () => {
  const { currentUser } = useAuth();
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  if (currentUser) {
    // get request with token
    const token = await currentUser.getIdToken();
    const response = await axios.get(`${URL_BASE}/affiliation`, {
      headers: { token },
    });
    const compAndUser = response.data.message;

    //back end return uid, affiliation, contact
  }
};

export default getAffiliation;
