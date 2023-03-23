import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { MarketListings } from "../../components/MarketListings/MarketListings";
import { useEffect, useState } from "react";
import "../UserProfile/UserProfile.scss";
import getMarketPost from "../../helpers/marketPostFetcher";
import { ICompany, IMarketPost } from "customTypes";
import { useNavigate, useParams } from "react-router-dom";
import getCompany from "../../helpers/companyFetcher";

export const CompanyProfile: React.FC = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState<IMarketPost[]>([]);
  const [services, setServices] = useState<IMarketPost[]>([]);
  const [company, setCompany] = useState<ICompany | null>(null);
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
          navigate("/home");
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
          <MarketListings posts={products} title={"Products"} />
          <MarketListings posts={services} title={"Services"} />
        </div>
      )}
    </>
  );
};

export default CompanyProfile;
