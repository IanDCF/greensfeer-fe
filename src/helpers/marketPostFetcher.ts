import axios, { AxiosError } from "axios";
import { IMarketPost } from "customTypes";

const getMarketPost = async (companyId: string) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data } = await axios.get(
      `${URL_BASE}/market_post/company/${companyId}`
    );
    return data as IMarketPost[];
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export default getMarketPost;
