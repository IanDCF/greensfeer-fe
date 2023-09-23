import axios from "axios";
import { IMarketPost } from "customTypes";

const getMarketPost = async (companyId: string) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data, status } = await axios.get(
      `${URL_BASE}/market_post/company/${companyId}`
    );
    if (status !== 200) return null;
    return data as IMarketPost[];
  } catch (error) {
    throw new Error();
  }
};

export default getMarketPost;
