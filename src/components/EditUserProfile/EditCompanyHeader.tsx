import { MouseEventHandler, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import ControlButton from "../../components/ControlButtons/ControlButton";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./EditModal.scss";
import { ICompany } from "customTypes";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { TEditSchema } from "../../schemas/UserSchema";
import { updateUser } from "../../helpers/userFetcher";
import { getAuth } from "firebase/auth";
import { set } from "firebase/database";
import { updateCompany } from "../../helpers/companyFetcher";

interface Props {
  openModal: boolean;
  editHeaderHandler: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent
  ) => void;
  CompanyData: ICompany;
  setCompanyData: (newCompanydata: ICompany) => void;
}

const populateEdit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Get values from form
  const companyNameInput = e.currentTarget.elements.namedItem(
    "companyName"
  ) as HTMLInputElement;
  const sectorInput = e.currentTarget.elements.namedItem(
    "sector"
  ) as HTMLSelectElement;
  const logoPicInput = e.currentTarget.elements.namedItem(
    "logoPic"
  ) as HTMLInputElement;
  const bannerPicInput = e.currentTarget.elements.namedItem(
    "bannerPic"
  ) as HTMLInputElement;
  const marketRoleInput = e.currentTarget.elements.namedItem(
    "marketRole"
  ) as HTMLSelectElement;
  const headlineInput = e.currentTarget.elements.namedItem(
    "headline"
  ) as HTMLInputElement;
  const emailInput = e.currentTarget.elements.namedItem(
    "email"
  ) as HTMLInputElement;
  const websiteInput = e.currentTarget.elements.namedItem(
    "website"
  ) as HTMLInputElement;
  const locationInput = e.currentTarget.elements.namedItem(
    "location"
  ) as HTMLInputElement;

  const company_name = companyNameInput.value;
  const sector = sectorInput.value;
  const market_role = marketRoleInput.value;
  const headline = headlineInput.value;
  const email = emailInput.value;
  const website = websiteInput.value;
  const location = locationInput.value;
  const logo_file = logoPicInput.files ? logoPicInput.files[0] : "";
  const banner_file = bannerPicInput.files ? bannerPicInput.files[0] : "";
  let logo_url;
  let banner_url;
  logo_file && (logo_url = await upload(logo_file));
  banner_file && (banner_url = await upload(banner_file));

  const updateObj = {
    company_name,
    sector,
    market_role,
    headline,
    email,
    website,
    location,
    logo_url,
    banner_url,
  };
  return updateObj;
};

const upload = async (pic: File | undefined) => {
  const storage = getStorage();
  if (pic) {
    const newPicRef = ref(storage, `${pic.name}`);
    await uploadBytes(newPicRef, pic);
    const url = await getDownloadURL(newPicRef);
    return url;
  } else return "";
};

export const EditCompanyHeader: React.FC<Props> = ({
  openModal,
  editHeaderHandler,
  CompanyData,
  setCompanyData,
}) => {
  const [update, setUpdate] = useState<Object>();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateObj = await populateEdit(e);
    setUpdate(updateObj);
    console.log(CompanyData);
    setCompanyData({
      ...CompanyData,
      ...updateObj,
      banner: updateObj.banner_url || CompanyData.banner,
      logo: updateObj.logo_url || CompanyData.logo,
      market_role: updateObj.market_role || CompanyData.market_role,
      headline: updateObj.headline || CompanyData.headline,
    });

    updateCompany(CompanyData?.company_id, updateObj)
      .then(() => {
        editHeaderHandler(e);
      })
      .catch((err) => err);
  };
  if (!openModal) return <></>;
  return (
    <div className="edit-modal">
      <form className="edit-modal__card" onSubmit={handleSubmit}>
        <div className="edit-modal__close" onClick={editHeaderHandler}>
          <AiOutlineClose />
        </div>
        <div className="edit-modal__title">Edit company information</div>
        <div className="edit-modal__input-fields">
          <div className="edit-modal__img-upload">
            <div className="edit-modal__pic1">
              {/* {logoUrl && (
                <div className="edit-modal__upload-check">
                  <BsFillCheckCircleFill />
                </div>
              )} */}
              <label htmlFor="logoPic" className="edit-modal__label">
                logo
              </label>
              <div className="edit-modal__icon">
                <BsCamera />
              </div>
              <input
                type="file"
                id="logoPic"
                name="logoPic"
                accept="image/*"
                // onChange={handlePic}
                style={{ opacity: 0 }}
                className="edit-modal__input-file"
              />
            </div>
            <div className="edit-modal__pic2">
              {/* {bannerUrl && (
                <div className="edit-modal__upload-check">
                  <BsFillCheckCircleFill />
                </div>
              )} */}
              <label htmlFor="bannerPic" className="edit-modal__label">
                company banner
              </label>
              <div className="edit-modal__icon">
                <BsCamera />
              </div>
              <input
                type="file"
                name="bannerPic"
                id="bannerPic"
                // onChange={handleBanner}
                accept="image/*"
                style={{ opacity: 0 }}
                className="edit-modal__input-file"
              />
            </div>
          </div>
          <div className="edit-modal__text-input">
            <div className="edit-modal__input-div">
              <label htmlFor="companyName" className="edit-modal__label-text">
                company name*
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                defaultValue={CompanyData?.company_name}
                className="edit-modal__input"
                placeholder="Enter company name"
              />
            </div>
            <div className="edit-modal__input-div">
              <label className="edit-modal__label-text" htmlFor="sector">
                sector*
              </label>
              <select id="sector" name="sector" className="edit-modal__input">
                <option hidden={true} defaultValue={CompanyData?.sector}>
                  {CompanyData?.sector || "Select a sector"}
                </option>
                <option value="Various Sectors">Various Sectors</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Aviation & Shipping">
                  Aviation and Shipping
                </option>
                <option value="Biodiversity Conservation">
                  Biodiversity Conservation
                </option>
                <option value="Blue Carbon">
                  Blue Carbon (CO2 sequestration in marine and coastal
                  ecosystems)
                </option>
                <option value="Building & Construction">
                  Building and Construction
                </option>
                <option value="Carbon Capture & Storage">
                  Carbon Capture and Storage (CCS)
                </option>
                <option value="Circular Economy">Circular Economy</option>
                <option value="Climate Tech">Climate Tech</option>
                <option value="Distributed Energy">Distributed Energy</option>
                <option value="Ecotourism">Ecotourism</option>
                <option value="Energy Efficiency">Energy Efficiency</option>
                <option value="Energy Storage">Energy Storage</option>
                <option value="Forestry">Forestry</option>
                <option value="Industrial Processes & Manufacturing">
                  Industrial Processes and Manufacturing
                </option>
                <option value="Land Use & Conservation">
                  Land Use and Conservation
                </option>
                <option value="REDD+">
                  REDD+ (Reducing Emissions from Deforestation and Forest
                  Degradation)
                </option>
                <option value="Renewable Energy">Renewable Energy</option>
                <option value="Social & Community Development">
                  Social and Community Development
                </option>
                <option value="Transportation">Transportation</option>
                <option value="Waste Management">Waste Management</option>
                <option value="Water Treatment & Supply">
                  Water Treatment and Supply
                </option>
                <option value="Climate Adaptation & Resilience">
                  Climate Adaptation and Resilience
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="edit-modal__input-div">
              <label className="edit-modal__label-text" htmlFor="marketRole">
                market role*
              </label>
              <select
                id="marketRole"
                name="marketRole"
                className="edit-modal__input"
              >
                <option hidden defaultValue={CompanyData?.market_role}>
                  {CompanyData?.market_role || "Select a role"}
                </option>
                <option value="Broker">Broker</option>
                <option value="Buyer">Buyer</option>
                <option value="Carbon Consultancy">Carbon Consultancy</option>
                <option value="Credit Assurance">Credit Assurance</option>
                <option value="Exchange">Exchange</option>
                <option value="Legal Advising">Legal Advising</option>
                <option value="Life Cycle Assessment">
                  Life Cycle Assessment
                </option>
                <option value="Market Analysis">Market Analysis</option>
                <option value="Offset Fund">Offset Fund</option>
                <option value="Offset Standard Setter">
                  Offset Standard Setter
                </option>
                <option value="Policy Maker">Policy Maker</option>
                <option value="Project Aggregator">Project Aggregator</option>
                <option value="Project Developer">Project Developer</option>
                <option value="Project Financing">Project Financing</option>
                <option value="Registry Operator">Registry Operator</option>
                <option value="Retailer">Retailer</option>
                <option value="Risk Management">Risk Management</option>
                <option value="SaaS Provider">SaaS Provider</option>
                <option value="Seller">Seller</option>
                <option value="Standard Registry">Standard Registry</option>
                <option value="Third Party Auditor">Third Party Auditor</option>
                <option value="Third Party Validator">
                  Third Party Validator
                </option>
                <option value="Third Party Verifier">
                  Third Party Verifier
                </option>
                <option value="Verification & Validation Body">
                  Verification & Validation Body
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="edit-modal__input-div">
              <label className="edit-modal__label-text" htmlFor="headline">
                headline
              </label>
              <input
                type="text"
                id="headline"
                name="headline"
                defaultValue={CompanyData?.headline}
                className="edit-modal__input"
                placeholder="Enter a headline"
              />
            </div>

            <div className="edit-modal__input-div">
              <label className="edit-modal__label-text">email*</label>
              <input
                type="email"
                id="email"
                name="email"
                className="edit-modal__input"
                defaultValue={CompanyData?.email}
                placeholder="Enter email address"
              />
            </div>
            <div className="edit-modal__input-div">
              <label className="edit-modal__label-text">website*</label>
              <input
                type="text"
                id="website"
                name="website"
                className="edit-modal__input"
                defaultValue={CompanyData?.website}
                placeholder="Enter company website"
              />
            </div>
            <div className="edit-modal__input-div">
              <label className="edit-modal__label-text">location*</label>
              <input
                type="text"
                id="location"
                name="location"
                defaultValue={CompanyData?.location}
                className="edit-modal__input"
                placeholder="Where are you located?"
              />
            </div>
          </div>
          <div className="edit-modal__required-text">
            * required input field
          </div>
        </div>
        <div className="edit-modal__controls">
          <div onClick={editHeaderHandler}>
            {" "}
            <ControlButton dark={true} text="Cancel" link="#" btnType="link" />
          </div>
          <ControlButton dark={false} text="Save" btnType="submit" />
        </div>
      </form>
    </div>
  );
};
