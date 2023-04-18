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

const updateCompany = async (
  company_id: string | undefined,
  update: Object | undefined
) => {
  if (!company_id || !update) return;
  const URL_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
  const res = await axios.patch(`${URL_BASE}/company/${company_id}`, {
    update,
  });
};

export { updateCompany };
export default getCompany;
