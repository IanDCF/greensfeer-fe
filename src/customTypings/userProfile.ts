declare module "userProfile" {
  type UserType = {
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
  };
  interface UserProps {
    user: UserType;
  }
}

export default module;
