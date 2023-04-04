import axios from "axios";
import { ICompany } from "customTypes";
import { User } from "firebase/auth";
import { useAuth } from "../context/AuthProvider/AuthProvider";

const getAffiliation = async (uid:string) => {
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
