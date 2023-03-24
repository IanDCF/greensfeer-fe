import { ICompany, IUser } from "customTypes";
import "./ProfileAbout.scss";

interface ProfileAboutProps {
  ProfileData?: IUser;
  CompanyData?: ICompany;
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
          <p className="about__text">{`${ProfileData?.about}`}</p>
        </>
      ) : (
        <>
          <p className="about__text">{`${CompanyData?.description}`}</p>
        </>
      )}
    </div>
  );
};
