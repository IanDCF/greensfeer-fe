import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { CompanyListings } from "../../components/CompanyListings/CompanyListings";
import { MouseEventHandler, useEffect, useState } from "react";
import "../UserProfile/UserProfile.scss";
import "./CompanyProfile.scss";
import getMarketPost from "../../helpers/marketPostFetcher";
import { ICompany, IMarketPost } from "customTypes";
import { useNavigate, useParams } from "react-router-dom";
import getCompany from "../../helpers/companyFetcher";
import Modal from "../../components/PromptModal/PromptModal";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { getAllAffiliations } from "../../helpers/affiliationFetcher";
import { EditCompanyHeader } from "../../components/EditUserProfile/EditCompanyHeader";
import { EditCompanyAbout } from "../../components/EditUserProfile/EditCompanyAbout";

export const CompanyProfile: React.FC = () => {
  const { currentUser } = useAuth();
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState<IMarketPost[]>([]);
  const [services, setServices] = useState<IMarketPost[]>([]);
  const [company, setCompany] = useState<ICompany | null>(null);
  const [openCompanyModal, setOpenCompanyModal] = useState<boolean>(false);
  const [headerModal, setHeaderModal] = useState<boolean>(false);
  const [aboutModal, setAboutModal] = useState<boolean>(false);
  const [projectModal, setProjectModal] = useState<boolean>(false);
  const [serviceModal, setServiceModal] = useState<boolean>(false);
  const [companyProfileType, setCompanyProfileType] =
    useState<string>("not affiliated");
  const promptHandler: MouseEventHandler = () => {
    setOpenCompanyModal(false);
    localStorage.setItem("ListingModalSeen", "yes");
  };

  const editHeaderHandler: MouseEventHandler = () => {
    setHeaderModal(!headerModal);
  };

  const editAboutHandler: MouseEventHandler = () => {
    setAboutModal(!aboutModal);
  };

  const editProjectHandler: MouseEventHandler = () => {
    setProjectModal(!projectModal);
  };

  const editServiceHandler: MouseEventHandler = () => {
    setServiceModal(!serviceModal);
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
      {company ? (
        <div className="user-profile-container">
          <ProfileHeader
            CompanyData={company}
            user={false}
            editing={companyProfileType === "affiliated" ? true : false}
            editHeaderHandler={editHeaderHandler}
          />
          <ProfileAbout
            CompanyData={company}
            user={false}
            editing={companyProfileType === "affiliated" ? true : false}
            editAboutHandler={editAboutHandler}
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
          <Modal open={openCompanyModal} clickHandler={promptHandler} />
          <EditCompanyHeader
            openModal={headerModal}
            editHeaderHandler={editHeaderHandler}
            CompanyData={company}
          />
          <EditCompanyAbout
            openModal={aboutModal}
            editAboutHandler={editAboutHandler}
          />
        </div>
      ) : (
        <div className="user-profile-loading">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default CompanyProfile;
