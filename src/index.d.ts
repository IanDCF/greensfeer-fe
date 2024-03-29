declare module "customTypes" {
  interface Props {
    id: string;
    darkMode: boolean;
    topLine: string;
    headline: string;
    description: string;
    buttonText: string;
    link: string;
    alt: string;
  }
  export interface IUser {
    uid: string;
    profile_banner?: string | undefined;
    about?: string;
    last_name: string;
    created_at: string;
    profile_picture?: string | undefined;
    location: string | undefined;
    linkedin?: null;
    first_name: string;
    headline: string;
    email: string;
    role: string;
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
    location: string;
    company_id: string;
    post_type: "Project" | "Service";
    verified: boolean;
    sdg: Array;
    photos: Array;
    sector: string;
    company_name: string;
    logo: string;
    banner: string;
    managed?: boolean;
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
    price_per_credit: string;
    ep_type: string;
    verification_standard: string;
    project_end_date: string;
    offset_volume: number;
    offset_type: string;
    vintage_year: string;
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
    company_name: string;
    logo: string;
    banner: string;
    description: string;
    created_at: string;
    location: string;
    market_role: string;
    sector: string;
    email: string;
    website: string;
    headline: string;
    description: string;
    verified?: boolean;
    managed?: boolean;
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
