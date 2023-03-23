import axios, { AxiosError } from "axios";
import { ICompany } from "customTypes";

const getCompany = async (companyId: string) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data, status } = await axios.get(
      `${URL_BASE}/company/${companyId}`
    );
    if (status !== 200) return null;
    return data as ICompany;
  } catch (error) {
    console.log(error);
  }
};

export default getCompany;
