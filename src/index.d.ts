declare module "customTypes" {
  interface Props {
    id: string;
    darkMode: boolean;
    topLine: string;
    headLine: string;
    description: string;
    buttonText: string;
    link: string;
    alt: string;
  }
  export interface IUser {
    uid: string;
    profile_banner?: undefined;
    about?: string;
    last_name: string;
    created_at: string;
    profile_picture?: undefined;
    location: Location;
    linkedin?: null;
    first_name: string;
    headline?: null;
    email: string;
  }
  export interface IMarketPost {
    image: string;
    link: string;
    created_at: string;
    description: string;
    p?: P;
    user_id: string;
    post_name: string;
    market_post_id: string;
    contact: Contact;
    post_category: string;
    location: Location;
    company_id: string;
    post_type: "Project" | "Service";
    verified: boolean;
    sdg: Array;
    photos: Array;
    sector: string;
  }
  export interface P {
    offset_unit: string;
    issuance_date: string;
    modular_benefits?: ModularBenefitsEntity[] | null;
    total_price: number;
    credit_volume: number;
    credit_unit: string;
    expiry_date: string;
    verification_number: string;
    price_per_credit: number;
    ep_type: string;
    verification_standard: string;
    project_end_date: string;
    offset_volume: number;
    offset_type: string;
    vintage_year: number;
    methodology: string;
    project_start_date: string;
  }
  export interface ModularBenefitsEntity {
    mod_ben_id: string;
    description: string;
  }
  export interface Contact {
    phone: string;
    email: string;
  }
  export interface Location {
    country: string;
    city: string;
    state_province: string;
  }
  export interface ICompany {
    company_id: string;
    name: string;
    logo: string;
    banner: string;
    description: string;
    created_at: string;
    location: Location;
    market_role: string;
    sector: string;
    email: string;
    website: string;
    headline: string;
    description: string;
  }

  interface IUser {
    first_name: string;
    last_name: string;
    headline: string;
    location: Location;
    profile_picture: string;
    profile_banner: string;
    about: string;
    created_at: string;
  }

  export interface IAffiliation {
    company_id: string;
    user_id: string;
    logo: string;
    company_name: string;
    admin: boolean;
    created_at: CreatedAt;
    affiliation_id: string;
    posting: boolean;
  }
  export interface CreatedAt {
    _seconds: number;
    _nanoseconds: number;
  }
}

module.exports = {
  Props,
};
