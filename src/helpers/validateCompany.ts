import newCompanySchema, { TNewCompany } from "../schemas/CompanySchema";
import companyCreator from "./companyCreator";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

const validateCompany = async (company: TNewCompany) => {
  const companyValidation = newCompanySchema.safeParse(company);
  if (!companyValidation.success) {
    console.log(companyValidation.error.errors);
  }
  if (companyValidation.success) {
    try {
      //send post req?
      companyCreator(company)
        .then((res) => {
          return res.data.message;
        })
        .then((companyId) => {
          setTimeout(() => {
            navigate(`/company/${companyId}`);
          }, 3000);
        });
    } catch (error) {
      console.log(`catched error: ${error}`);
    }
  }
};

export default validateCompany;
