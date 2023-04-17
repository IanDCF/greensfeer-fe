import axios, { AxiosError } from "axios";
import { IMarketPost } from "customTypes";

const selectMarketPost = async (marketPostId: string) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data } = await axios.get(`${URL_BASE}/market_post/${marketPostId}`);
    return data as IMarketPost;
  } catch (error) {
    throw new Error();
  }
};

export default selectMarketPost;
