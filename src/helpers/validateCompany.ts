import newCompanySchema, { TNewCompany } from "../schemas/CompanySchema";
import companyCreator from "./companyCreator";
import { useNavigate } from "react-router-dom";

const validateCompany = async (company: TNewCompany) => {
  const navigate = useNavigate();
  const companyValidation = newCompanySchema.safeParse(company);
  if (!companyValidation.success) {
  }
  if (companyValidation.success) {
    try {
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
