import { ICompany, IUser } from "customTypes";
import "./ProfileAbout.scss";
import { FiEdit2 } from "react-icons/fi";
import { MouseEventHandler } from "react";

interface ProfileAboutProps {
  ProfileData?: IUser;
  CompanyData?: ICompany;
  user: boolean;
  userType?: string;
  editing?: boolean;
  editAboutHandler?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent
  ) => void;
}

export const ProfileAbout: React.FC<ProfileAboutProps> = ({
  ProfileData,
  CompanyData,
  user,
  userType,
  editing,
  editAboutHandler,
}) => {
  return (
    <div className="about">
      {editing && (
        <div className="header__edit-btn" onClick={editAboutHandler}>
          <FiEdit2 />
        </div>
      )}
      <h3 className="about__title">About</h3>
      {user ? (
        <>
          <p className="about__text">
            {ProfileData?.about
              ? ProfileData?.about
              : "Proud Greensfeer Member"}
          </p>
        </>
      ) : (
        <>
          <p className="about__text">
            {CompanyData?.description
              ? CompanyData?.description
              : "We love Greensfeer"}
          </p>
        </>
      )}
    </div>
  );
};
