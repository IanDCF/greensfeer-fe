import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { CompanyListings } from "../../components/CompanyListings/CompanyListings";
import { MouseEventHandler, useEffect, useState } from "react";
import "../UserProfile/UserProfile.scss";
import getMarketPost from "../../helpers/marketPostFetcher";
import { ICompany, IMarketPost } from "customTypes";
import { useNavigate, useParams } from "react-router-dom";
import getCompany from "../../helpers/companyFetcher";
import Modal from "../../components/Modal/Modal";

export const CompanyProfile: React.FC = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState<IMarketPost[]>([]);
  const [services, setServices] = useState<IMarketPost[]>([]);
  const [company, setCompany] = useState<ICompany | null>(null);
  const [openCompanyModal, setOpenCompanyModal] = useState<boolean>(true);
  const clickHandler:MouseEventHandler= () => {
    setOpenCompanyModal(false);
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
  }, [companyId]);

  return (
    <>
      {company && (
        <div className="user-profile-container">
          <ProfileHeader CompanyData={company} user={false} />
          <ProfileAbout CompanyData={company} user={false} />
          {/* <Affiliations /> */}
          <CompanyListings posts={products} title={"Projects"} />
          <CompanyListings posts={services} title={"Services"} />
          <Modal open={openCompanyModal} clickHandler={clickHandler} />
        </div>
      )}
    </>
  );
};

export default CompanyProfile;
