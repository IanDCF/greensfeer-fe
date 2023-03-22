import axios, { AxiosError } from "axios";
import { ICompany } from "customTypes";

const getCompany = async (companyId: string) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data } = await axios.get(`${URL_BASE}/company/${companyId}`);
    return data as ICompany;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export default getCompany;
