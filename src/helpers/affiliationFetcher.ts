import axios from "axios";
import { ICompany } from "customTypes";
import { User } from "firebase/auth";
import { useAuth } from "../context/AuthProvider/AuthProvider";

const getAffiliation = async (currentUser: User | null) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  if (currentUser) {
    // get request with token
    const token = await currentUser.getIdToken();
    const response = await axios.get(`${URL_BASE}/affiliation`, {
      headers: { token },
    });
    const companyAndUser = response.data.message;
    return companyAndUser;
    //back end return uid, affiliation, contact
  } else {
    return console.log("no user logged in");
  }
};
export default getAffiliation;

const getAllAffiliations = async (uid: string) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data, status } = await axios.get(`${URL_BASE}/affiliation/${uid}`);
    return data as ICompany[];
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};

export { getAllAffiliations };

const newUserAffiliation = async (
  companyId: string,
  uid: string,
  admin: boolean,
  posting: boolean
) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data, status } = await axios.post(`${URL_BASE}/affiliation/new`, {
      company_id: companyId,
      admin,
      posting,
      user_id: uid,
    });
    if (status !== 201) return null;
    //Need to add the Affiliations Types to data
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};

export { newUserAffiliation };
