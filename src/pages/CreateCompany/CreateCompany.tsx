import { matchPath, useLocation } from "react-router-dom";
import CompanyForm1 from "./CompanyForm1";
import CompanyForm2 from "./CompanyForm2";
import "./CreateCompany.scss";

const CreateCompany: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const createCompany1 = matchPath(path, "/create-company/step1");
  const createCompany2 = matchPath(path, "/create-company/step2");

  return (
    <section className="create-company">
      {createCompany1 && <CompanyForm1 />}
      {createCompany2 && <CompanyForm2 />}
    </section>
  );
};

export default CreateCompany;
