import axios from "axios";
import { IMarketPost } from "customTypes";

const allMarketPosts = async () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data } = await axios.get(`${URL_BASE}/market_post/`);
    return data as IMarketPost[];
  } catch (error) {
    throw new Error();
  }
};

export default allMarketPosts;
