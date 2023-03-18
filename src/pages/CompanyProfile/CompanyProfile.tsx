import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { MarketListings } from "../../components/MarketListings/MarketListings";
import CompanyData from "../../data/CompanyProfile.json";
import MarketPosts from "../../data/MarketPosts.json";
import { useEffect, useState } from "react";
import "../UserProfile/UserProfile.scss";

interface MarketPost {
  post_name: string;
  post_type: string;
  post_category: string;
  company_id: string;
  p?: {
    total_price: number;
  };
}

interface CompanyProps {
  name: string;
  headline: string;
  location: {
    city: string;
    state_province: string;
    country: string;
  };
  logo: string;
  banner: string;
  about: string;
}
export const CompanyProfile: React.FC<CompanyProps> = () => {
  const [products, setProducts] = useState<MarketPost[]>([]);
  const [services, setServices] = useState<MarketPost[]>([]);

  useEffect(() => {
    setProducts(MarketPosts.filter((post) => post.p));
    setServices(MarketPosts.filter((post) => !post.p));
  }, []);

  return (
    <>
      <div className="user-profile-container">
        <ProfileHeader CompanyData={CompanyData} user={false} />
        <ProfileAbout CompanyData={CompanyData} user={false} />
        {/* <Affiliations /> */}
        <MarketListings posts={products} title={"Products"} />
        <MarketListings posts={services} title={"Services"} />
      </div>
    </>
  );
};

export default CompanyProfile;
