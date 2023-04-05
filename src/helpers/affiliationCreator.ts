import axios from "axios";
import { User } from "firebase/auth";
import { useAuth } from "../context/AuthProvider/AuthProvider";

const addAffiliation = async (currentUser: User | null, company_id: string) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  if (currentUser) {
    // get request with token
    const token = await currentUser.getIdToken();
    const response = await axios.post(`${URL_BASE}/affiliation/new/`, {
      headers: { token, company_id, admin: true, posting: true },
    });
    const companyAndUser = response.data.message;
    return companyAndUser;
    //back end return uid, affiliation, contact
  } else {
    return console.log("no user logged in");
  }
};

export default addAffiliation;
