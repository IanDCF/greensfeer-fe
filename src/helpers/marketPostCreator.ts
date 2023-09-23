import axios from "axios";
import { TNewListing } from "../schemas/ListingSchema";

const createMarketPost = async (newMarketPost: TNewListing) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const res = await axios.post(`${URL_BASE}/market_post/`, { newMarketPost });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export default createMarketPost;
