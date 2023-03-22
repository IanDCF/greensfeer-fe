import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { MarketListings } from "../../components/MarketListings/MarketListings";
import CompanyData from "../../data/CompanyProfile.json";
import MarketPosts from "../../data/MarketListings.json";
import { useEffect, useState } from "react";
import "../UserProfile/UserProfile.scss";
import getMarketPost from "../../helpers/marketPostFetcher";
import { ICompany, IMarketPost } from "customTypes";
import { useParams } from "react-router-dom";
import getCompany from "../../helpers/companyFetcher";

export const CompanyProfile: React.FC = () => {
  const { companyId } = useParams();
  const [products, setProducts] = useState<IMarketPost[]>([]);
  const [services, setServices] = useState<IMarketPost[]>([]);
  const [company, setCompany] = useState<ICompany>();
  useEffect(() => {
    const getData = async () => {
      if (companyId) {
        const companyData = await getCompany(companyId);
        if (companyData) {
          setCompany(companyData);
          const marketPost = await getMarketPost(companyId);
          setProducts(marketPost.filter((post) => post.p));
          setServices(marketPost.filter((post) => !post.p));
        }
      }
    };
    getData();
  }, [companyId]);

  return (
    <>
      <div className="user-profile-container">
        <ProfileHeader CompanyData={company} user={false} />
        <ProfileAbout CompanyData={company} user={false} />
        {/* <Affiliations /> */}
        <MarketListings posts={products} title={"Products"} />
        <MarketListings posts={services} title={"Services"} />
      </div>
    </>
  );
};

export default CompanyProfile;
