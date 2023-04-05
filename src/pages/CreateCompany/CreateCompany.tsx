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
import addAffiliation from "../../helpers/affiliationCreator";
import getAllCompanies from "../../helpers/allCompanyFetcher";
import companyCreator from "../../helpers/companyCreator";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../../context/AuthProvider/AuthProvider";

const CreateCompany: React.FC = () => {
  const storage = getStorage();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const newCompanyDefault = {} as TNewCompany;
  const [newCompany, setNewCompany] = useState<TNewCompany>(newCompanyDefault);
  const [stepOneDone, setStepOneDone] = useState(false);
  const [stepTwoDone, setStepTwoDone] = useState(false);
  //create state to store file
  const [profilePic, setProfilePic] = useState<File>();
  const [profileUrl, setProfileUrl] = useState("");
  const [bannerPic, setBannerPic] = useState<File>();
  const [bannerUrl, setBannerUrl] = useState("");
  const [isChecked1, setIsChecked1] = useState(false);
  const [formErrs, setFormErrs] = useState("");
  const { currentUser } = useAuth();

  const clickHandler = () => {
    setStepOneDone(false);
  };

  const handlePic = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const pic: File = (target.files as FileList)[0];
    setProfilePic(pic);
  };
  const handleBanner = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const pic: File = (target.files as FileList)[0];
    setBannerPic(pic);
  };
  useEffect(() => {
    if (profilePic) {
      const newPicRef = ref(storage, `${profilePic.name}`);

      const upload = async () => {
        const toCloud = await uploadBytes(newPicRef, profilePic);
        const url = await getDownloadURL(newPicRef);
        setProfileUrl(url);
      };
      upload();
    }
  }, [profilePic]);
  useEffect(() => {
    if (bannerPic) {
      const newPicRef = ref(storage, `${bannerPic.name}`);

      const upload = async () => {
        const toCloud = await uploadBytes(newPicRef, bannerPic);
        const url = await getDownloadURL(newPicRef);
        setBannerUrl(url);
      };
      upload();
    }
  }, [bannerPic]);
  //this upoads picture successfully but does not return a path with token

  useEffect(() => {
    if (stepTwoDone) validateCompany(newCompany);
  }, [stepTwoDone]);

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
            addAffiliation(currentUser, companyId);
            setTimeout(() => {
              navigate(`/company/${companyId}`);
            }, 3000);
          });
      } catch (error) {
        console.log(`catched error: ${error}`);
      }
    }
  };

  const handleFirstSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrs("");
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

    const name = nameInput.value;
    const sector = sectorInput.value;
    const market_role = marketRoleInput.value;
    const location = locationInput.value;
    const logo = profileUrl;
    const banner = bannerUrl;
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
        setFormErrs("That company is already on Greensfeer!");
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
    }

    if (!newCompany.name) {
      setFormErrs("Please enter a company name");
      return;
    }
    if (!newCompany.sector) {
      setFormErrs("Please enter a sector");
      return;
    }
    if (!newCompany.market_role) {
      setFormErrs("Please enter a market role");
      return;
    }
    if (!newCompany.location) {
      setFormErrs("Please enter a location");
      return;
    }
    if (!isChecked1) {
      setFormErrs("Please confirm you are an organization rep");
      return;
    }
    setStepOneDone(true);
    navigate("/create-company/step2");

    console.log("Form 1 submitted");
    // Correctly checks company name against database & saves form fields to state
  };

  const handleSecondSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const headlineInput = e.currentTarget.elements.namedItem(
      "headline"
    ) as HTMLInputElement;
    const descriptionInput = e.currentTarget.elements.namedItem(
      "description"
    ) as HTMLInputElement;
    const emailInput = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const websiteInput = e.currentTarget.elements.namedItem(
      "website"
    ) as HTMLInputElement;

    const headline = headlineInput.value;
    const description = descriptionInput.value;
    const email = emailInput.value;
    const website = websiteInput.value;
    const registerCompanyDetailValidation =
      registerCompanyDetailSchema.safeParse({
        headline,
        description,
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
        description,
        email,
        website,
      });
    }
    setStepTwoDone(true);
    console.log("Form 2 submitted");
    // Perform the necessary actions for form 2 submission
  };

  const handleCheckbox1 = (isChecked: boolean) => {
    setIsChecked1(isChecked);
  };

  const createCompany1 = matchPath(path, "/create-company/step1");
  const createCompany2 = matchPath(path, "/create-company/step2");

  return (
    <section className="create-company">
      {/* 
      // FIXME: add upload image thumbnail to inputs to show user successful upload?
      <div
        style={{
          backgroundImage: `url(${bannerUrl})`,
          height: "40px",
          width: "40px",
        }}
      ></div> */}
      {!stepOneDone && createCompany1 && (
        <CompanyForm1
          handleSubmit={handleFirstSubmit}
          handlePic={handlePic}
          handleBanner={handleBanner}
          handleCheckbox1={handleCheckbox1}
          isChecked1={isChecked1}
          errors={formErrs}
        />
      )}
      {stepOneDone && !stepTwoDone && createCompany2 && (
        <CompanyForm2
          handleSubmit={handleSecondSubmit}
          clickHandler={clickHandler}
        />
      )}
      {stepTwoDone && (
        <div className="create-company__form" style={{ fontSize: "4rem" }}>
          Company created, redirecting to new Company Profile
        </div>
      )}
      {stepTwoDone && (
        <div className="create-company__form" style={{ fontSize: "4rem" }}>
          Company created, redirecting to new Company Profile
        </div>
      )}
    </section>
  );
};

export default CreateCompany;
