import axios, { AxiosError } from "axios";
import  {
  type TNewCompany,
} from "../schemas/CompanySchema";

const createCompany = async (newCompany: TNewCompany) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const res  = await axios.post(`${URL_BASE}/company/`, newCompany);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export default createCompany;
