import axios from "axios";
import { useEffect, useState } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import newCompanySchema, {
  registerCompanyDetailSchema,
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
  const [stepOneDone, setStepOneDone] = useState(false);
  const [stepTwoDone, setStepTwoDone] = useState(false);

  useEffect(() => {
    if (stepTwoDone) validateCompany();
  }, [stepTwoDone]);

  const validateCompany = async () => {
    const companyValidation = newCompanySchema.safeParse(newCompany);
    if (!companyValidation.success) {
      console.log(companyValidation.error.errors);
    }
    if (companyValidation.success) {
      const company = companyValidation.data;
      try {
        //send post req?
        companyCreator(newCompany).then((res) => {
          console.log(res.data);
        });
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
    const bannerInput = e.currentTarget.elements.namedItem(
      "banner"
    ) as HTMLInputElement;

    const name = nameInput.value;
    const sector = sectorInput.value;
    const market_role = marketRoleInput.value;
    const location = locationInput.value;
    const logo = logoInput.value;
    const banner = bannerInput.value;
    const registerCompanySchemaValidation = registerCompanySchema.safeParse({
      name,
      sector,
      market_role,
      location,
      logo,
      banner,
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
        market_role,
        sector,
        location,
        logo,
        banner,
      });
      setStepOneDone(true);
      navigate("/create-company/step2");
    }
    console.log("Form 1 submitted");
    // Correctly checks company name against database & saves form fields to state
  };

  const handleSecondSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const headlineInput = e.currentTarget.elements.namedItem(
      "headline"
    ) as HTMLInputElement;
    const aboutInput = e.currentTarget.elements.namedItem(
      "about"
    ) as HTMLInputElement;
    const emailInput = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const websiteInput = e.currentTarget.elements.namedItem(
      "website"
    ) as HTMLInputElement;

    const headline = headlineInput.value;
    const about = aboutInput.value;
    const email = emailInput.value;
    const website = websiteInput.value;
    const registerCompanyDetailValidation =
      registerCompanyDetailSchema.safeParse({
        headline,
        about,
        email,
        website,
      });

    if (!registerCompanyDetailValidation.success) {
      const error = registerCompanyDetailValidation.error.errors;
      console.log(error);
    }
    if (registerCompanyDetailValidation.success) {
      setNewCompany({
        ...newCompany,
        headline,
        about,
        email,
        website,
      });
    }
    setStepTwoDone(true);
    console.log("Form 2 submitted");
    // Perform the necessary actions for form 2 submission
  };

  const createCompany1 = matchPath(path, "/create-company/step1");
  const createCompany2 = matchPath(path, "/create-company/step2");

  return (
    <section className="create-company">
      {!stepOneDone && createCompany1 && (
        <CompanyForm1 handleSubmit={handleFirstSubmit} />
      )}
      {stepOneDone && createCompany2 && (
        <CompanyForm2 handleSubmit={handleSecondSubmit} />
      )}
    </section>
  );
};

export default CreateCompany;
