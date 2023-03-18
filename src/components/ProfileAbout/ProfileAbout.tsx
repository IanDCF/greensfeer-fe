import "./ProfileAbout.scss";
interface UserProps {
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

interface ProfileAboutProps {
  ProfileData: UserProps;
  CompanyData: CompanyProps;
  user: boolean;
}

export const ProfileAbout: React.FC<ProfileAboutProps> = ({
  ProfileData,
  CompanyData,
  user,
}) => {
  return (
    <div className="about">
      <h3 className="about__title">About</h3>
      {user ? (
        <>
          <p className="about__text">{`${ProfileData.about}`}</p>
        </>
      ) : (
        <>
          <p className="about__text">{`${CompanyData.about}`}</p>
        </>
      )}
    </div>
  );
};
