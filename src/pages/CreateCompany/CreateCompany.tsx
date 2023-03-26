import axios from "axios";
import { useState } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import newCompanySchema, {
  registerCompanySchema,
  TNewCompany,
} from "../../schemas/CompanySchema";
import CompanyForm1 from "./CompanyForm1";
import CompanyForm2 from "./CompanyForm2";
import "./CreateCompany.scss";
import companyCreator from "../../helpers/companyCreator";
import getAllCompanies from "../../helpers/allCompanyFetcher";

const CreateCompany: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const newCompanyDefault = {} as TNewCompany;
  const [newCompany, setNewCompany] = useState<TNewCompany>(newCompanyDefault);
  const [hasUniqueName, setHasUniqueName] = useState(false);

  const validateCompany = async () => {
    const companyValidation = newCompanySchema.safeParse(newCompany);
    if (!companyValidation.success) {
      console.log(companyValidation.error.errors);
    }
    if (companyValidation.success) {
      const company = companyValidation.data;
      try {
        //send post req?
        companyCreator(newCompany);
        // .then((res)=>{ set res.data.company_id to newCompanyId})
        // navigate(`/company/${newCompanyId}`);
      } catch (error) {
        console.log(`catched error: ${error}`);
      }
    }
  };

  const handleFirstSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameInput = e.currentTarget.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const sectorInput = e.currentTarget.elements.namedItem(
      "sector"
    ) as HTMLInputElement;
    const marketRoleInput = e.currentTarget.elements.namedItem(
      "marketRole"
    ) as HTMLInputElement;
    const locationInput = e.currentTarget.elements.namedItem(
      "location"
    ) as HTMLInputElement;
    const logoInput = e.currentTarget.elements.namedItem(
      "logo"
    ) as HTMLInputElement;
    // const bannerInput = e.currentTarget.elements.namedItem("banner");

    const name = nameInput.value;
    const sector = sectorInput.value;
    const marketRole = marketRoleInput.value;
    const location = locationInput.value;
    const logo = logoInput.value;
    const registerCompanySchemaValidation = registerCompanySchema.safeParse({
      name,
      sector,
      marketRole,
      location,
      logo,
    });

    //get request for company where form input name matches existing company name
    const nameAvailable = await getAllCompanies().then((companies) => {
      const found = companies.find((company) => company.name === `${name}`);
      if (found) {
        console.log("error: name already in use");
        return false;
      }
      if (!found) {
        console.log("name available");
        return true;
      }
    });

    if (!nameAvailable) {
      return;
    }
    if (nameAvailable)
      if (!registerCompanySchemaValidation.success) {
        const error = registerCompanySchemaValidation.error.errors;
        console.log(error);
      }
    if (registerCompanySchemaValidation.success) {
      setNewCompany({
        ...newCompany,
        name,
        marketRole,
        sector,
        location,
        logo,
      });
    }
    // Perform the necessary actions for form 1 submission
    console.log("Form 1 submitted");
  };

  const handleSubmitFormTwo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form 2 submitted");
    // Perform the necessary actions for form 2 submission
  };

  const createCompany1 = matchPath(path, "/create-company/step1");
  const createCompany2 = matchPath(path, "/create-company/step2");

  return (
    <section className="create-company">
      {createCompany1 && <CompanyForm1 handleSubmit={handleFirstSubmit} />}
      {createCompany2 && <CompanyForm2 />}
    </section>
  );
};

export default CreateCompany;
