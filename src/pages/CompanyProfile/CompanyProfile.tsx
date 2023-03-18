import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileAbout } from "../../components/ProfileAbout/ProfileAbout";
import { MarketThumbnails } from "../../components/MarketThumbnails/MarketThumbnails";
import ProfileData from "../../data/CompanyProfile.json";
import MarketPosts from "../../data/MarketPosts.json";
import { useEffect, useState } from "react";
import "./CompanyProfile.scss";

interface MarketPost {
  post_name: string;
  post_type: string;
  post_category: string;
  company_id: string;
  p?: {
    total_price: number;
  };
}

interface ProfileProps {
  first_name: string;
  last_name: string;
  headline: string;
  location: {
    city: string;
    state_province: string;
    country: string;
  };
  profile_picture: string;
  profile_banner: string;
  about: string;
}
export const CompanyProfile: React.FC = () => {
  const ProfileData: ProfileProps = {
    first_name: "John",
    last_name: "Doe",
    headline: "Software Engineer",
    location: {
      city: "New York",
      state_province: "NY",
      country: "USA",
    },
    profile_picture: "https://example.com/profile_picture.png",
    profile_banner: "https://example.com/profile_banner.png",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const [products, setProducts] = useState<MarketPost[]>([]);
  const [services, setServices] = useState<MarketPost[]>([]);

  useEffect(() => {
    setProducts(MarketPosts.filter((post) => post.p));
    setServices(MarketPosts.filter((post) => !post.p));
  }, []);

  return (
    <>
      <div className="user-profile-container">
        <ProfileHeader ProfileData={ProfileData} />
        <ProfileAbout ProfileData={ProfileData} />
        {/* <Affiliations /> */}
        <MarketThumbnails posts={products} title={"Products"} />
        <MarketThumbnails posts={services} title={"Services"} />
      </div>
    </>
  );
};

export default CompanyProfile;
