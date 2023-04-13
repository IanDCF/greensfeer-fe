import axios, { AxiosError } from "axios";
import { ICompany } from "customTypes";

const getAllCompanies = async () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data } = await axios.get(`${URL_BASE}/company/`);
    return data as ICompany[];
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export default getAllCompanies;
