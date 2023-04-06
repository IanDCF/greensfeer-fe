import axios from "axios";
import { ICompany } from "customTypes";
import { User } from "firebase/auth";
import { useAuth } from "../context/AuthProvider/AuthProvider";

const getAffiliation = async (uid: string) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data, status } = await axios.get(`${URL_BASE}/affiliation/${uid}`);
    return data as ICompany[];
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};

export default getAffiliation;

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
