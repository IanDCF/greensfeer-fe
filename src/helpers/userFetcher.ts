import axios, { AxiosError } from "axios";
import { IUser } from "customTypes";

const entryForSignUp = async (idToken: string) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  const payload = { idToken };
  try {
    await axios.post(`${URL_BASE}/user/signUp`, payload);
  } catch (error) {
    console.log(error);
  }
};
const createUser = async (
  email: string,
  firstName: string,
  secondName: string,
  role: string,
  idToken: string,
  newsletter: boolean,
  notifications: boolean
) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data, status } = await axios.patch(`${URL_BASE}/user/create`, {
      first_name: firstName,
      last_name: secondName,
      role,
      idToken,
      email,
      headline: role,
      newsletter,
      notifications,
    });
    if (status !== 201) return null;
    return data as IUser;
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};

const allUsers = async () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  try {
    const { data, status } = await axios.get(`${URL_BASE}/user/`);
    if (status !== 200) return null;
    return data as IUser[];
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};


export { createUser, allUsers };
export default entryForSignUp;
