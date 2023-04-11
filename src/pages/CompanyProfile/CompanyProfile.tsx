import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { CompanyListings } from "../../components/CompanyListings/CompanyListings";
import { MouseEventHandler, useEffect, useState } from "react";
import "../UserProfile/UserProfile.scss";
import getMarketPost from "../../helpers/marketPostFetcher";
import { ICompany, IMarketPost } from "customTypes";
import { useNavigate, useParams } from "react-router-dom";
import getCompany from "../../helpers/companyFetcher";
import Modal from "../../components/PromptModal/PromptModal";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { getAllAffiliations } from "../../helpers/affiliationFetcher";

export const CompanyProfile: React.FC = () => {
  const { currentUser } = useAuth();
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState<IMarketPost[]>([]);
  const [services, setServices] = useState<IMarketPost[]>([]);
  const [company, setCompany] = useState<ICompany | null>(null);
  const [openCompanyModal, setOpenCompanyModal] = useState<boolean>(false);
  const [companyProfileType, setCompanyProfileType] =
    useState<string>("not affiliated");
  const clickHandler: MouseEventHandler = () => {
    setOpenCompanyModal(false);
      localStorage.setItem("ListingModalSeen", "yes");
  };
  useEffect(() => {
    const getData = async () => {
      if (companyId) {
        const companyData = await getCompany(companyId);
        if (companyData) {
          setCompany(companyData);
          const marketPost = await getMarketPost(companyId);
          if (marketPost) {
            setProducts(marketPost.filter((post) => post.p));
            setServices(marketPost.filter((post) => !post.p));
          }
        } else {
          navigate("/404");
        }
      }
    };
    getData();
        if (!localStorage.getItem("ListingModalSeen")) {
          setTimeout(() => {
            setOpenCompanyModal(true);
          }, 3000);
        }
  }, [companyId]);

  useEffect(() => {
    const checkAffiliation = async () => {
      try {
        if (companyId) {
          const affiliatedCompanies = await getAllAffiliations(
            currentUser?.uid ?? ""
          ); // Make GET request to endpoint to get affiliated companies
          const isAffiliated = affiliatedCompanies.some(
            (company) => company.company_id === companyId
          ); // Check if companyId exists in the affiliated companies array
          if (isAffiliated) {
            setCompanyProfileType("affiliated"); // Set companyProfileType state to "affiliated" if there is a match
          } else {
            setCompanyProfileType("not affiliated"); // Set to "not affiliated" if no match
          }
        }
      } catch (error) {
        console.error("Failed to get affiliated companies: ", error);
      }
    };
    checkAffiliation();
  }, [companyId, currentUser]);

  return (
    <>
      {company && (
        <div className="user-profile-container">
          <ProfileHeader
            CompanyData={company}
            user={false}
            editing={companyProfileType === "affiliated" ? true : false}
          />
          <ProfileAbout
            CompanyData={company}
            user={false}
            editing={companyProfileType === "affiliated" ? true : false}
          />
          {/* <Affiliations /> */}
          <CompanyListings
            posts={products}
            title={"Projects"}
            companyProfileType={companyProfileType}
          />
          <CompanyListings
            posts={services}
            title={"Services"}
            companyProfileType={companyProfileType}
          />
          <Modal open={openCompanyModal} clickHandler={clickHandler} />
        </div>
      )}
    </>
  );
};

export default CompanyProfile;
