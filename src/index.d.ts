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
    profile_banner?: null;
    about?: string;
    last_name: string;
    created_at: Timestamp;
    profile_picture?: null;
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
    post_type: string;
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
    about: string;
  }
}

module.exports = {
  Props,
};
