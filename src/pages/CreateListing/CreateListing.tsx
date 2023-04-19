import { useState, useEffect } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import "./CreateListing.scss";
import ListingForm1 from "./ListingForm1";
import ListingForm2 from "./ListingForm2";
import ListingForm3 from "./ListingForm3";
import newListingSchema, {
  TNewListing,
  registerListingSchema,
  registerListingDetailSchema,
  registerListingOptionalSchema,
} from "../../schemas/ListingSchema";
import createMarketPost from "../../helpers/marketPostCreator";
import getAffiliation, {
  getAllAffiliations,
} from "../../helpers/affiliationFetcher";
import getCompany from "../../helpers/companyFetcher";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import AffilationSearch from "./AffiliationSearch";

const CreateListing = () => {
  // create market post as current user
  /* FIXME: Market post tied to a company mechanism
  solutions: 
  check user afiliation from company page, show 'create post' button to affiliated user?
  send company id to params when create post button clicked, validate current user on backend using auth token?
  */
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const searchAffiliation = matchPath(path, "/search-affiliation");
  const createListing1 = matchPath(path, "/create-listing/step1");
  const createListing2 = matchPath(path, "/create-listing/step2");
  const createListing3 = matchPath(path, "/create-listing/step3");

  const newListingDefault = {} as TNewListing;
  const [newMarketPost, setNewMarketPost] =
    useState<TNewListing>(newListingDefault);
  // listingDone
  const [stepOneDone, setStepOneDone] = useState<boolean>(false);
  // listingDetailDone
  const [stepTwoDone, setStepTwoDone] = useState<boolean>(false);
  // listingOptionalDone
  const [productDetailDone, setProductDetailDone] = useState<boolean>(false);
  const [formErrs, setFormErrs] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [listingType, setListingType] = useState("");

  const clickHandler = () => {
    if (createListing2) {
      setStepOneDone(false);
      navigate("/create-listing/step1");
    }
    if (createListing3) {
      setStepTwoDone(false);
      navigate("/create-listing/step2");
    }
  };
  const handleChooseCompany = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentCompany(e.currentTarget.affiliation.value);
    setTimeout(() => {
      navigate("/create-listing/step1");
    }, 1500);

    // set company to state here so form can access
  };

  // validate post
  useEffect(() => {
    const validateAndPost = async () => {
      // const affiliation = await getAffiliation(currentUser);
      // console.log(affiliation);
      // const company = await getCompany(affiliation.company_id);
      // console.log(company);
      // setCurrentCompany(affiliation.company_id);
      // FIXME: possible to visit this page with no company created

      if (newMarketPost.post_type === "Service") {
        // validate & run axios.post
        const newListing = await validateListing();
        //check user via token, return user id & company id
        if (currentUser) {
          const token = await currentUser.getIdToken();
        }
        const service = {
          post_name: newListing?.post_name,
          post_type: newListing?.post_type,
          post_category: newListing?.service_type,
          description: newListing?.description,
          link: newListing?.link,
          location: newListing?.location,
          user_id: currentUser?.uid,
          company_id: currentCompany,
          contact: currentUser?.email,
          sector: newListing?.sector,
        };
        //post service
        if (!currentCompany) {
          return;
        } if(currentCompany) {
          createMarketPost(service);
          setFormErrs("Service Listing Created, navigating to marketplace");
          setTimeout(() => {
            navigate(`/marketplace/}`);
          }, 3000);
        }
      }
      if (productDetailDone && newMarketPost.post_type === "Project") {
        //validate & run axios.post
        const newListing = await validateListing();
        const project = {
          post_name: newListing?.post_name,
          post_type: newListing?.post_type,
          post_category: newListing?.project_type,
          description: newListing?.description,
          link: newListing?.link,
          location: newListing?.location,
          user_id: currentUser?.uid,
          company_id: currentCompany,
          contact: currentUser?.email,
          sector: newListing?.sector,
          p: {
            ep_type: newListing?.project_type,
            methodology: newListing?.methodology_id,
            verification_standard: newListing?.verification_standard,
            vintage_year: newListing?.vintage_year,
            price_per_credit: newListing?.price_per_credit,
          },
        };
        if (!currentCompany) {
          return;
        } if(currentCompany) {
    
          createMarketPost(project);
        }
      }
    };

    validateAndPost();
  }, [stepTwoDone, productDetailDone]);

  const validateListing = async () => {
    const listingValidation = newListingSchema.safeParse(newMarketPost);
    if (!listingValidation.success) {
      console.log(listingValidation.error.errors);
    }
    if (listingValidation.success) {
      return listingValidation.data;
    }
  };

  // first submit
  const handleFirstSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrs("");
    const post_typeInput = e.currentTarget.elements.namedItem(
      "post_type"
    ) as HTMLInputElement;
    const post_nameInput = e.currentTarget.elements.namedItem(
      "post_name"
    ) as HTMLInputElement;
    const sectorInput = e.currentTarget.elements.namedItem(
      "sector"
    ) as HTMLSelectElement;
    const descriptionInput = e.currentTarget.elements.namedItem(
      "description"
    ) as HTMLInputElement;

    const post_type = post_typeInput.value;
    const post_name = post_nameInput.value;
    const sector = sectorInput.value;
    const description = descriptionInput.value;

    const registerListingValidation = registerListingSchema.safeParse({
      post_type,
      post_name,
      sector,
      description,
    });

    if (!registerListingValidation.success) {
      const error = registerListingValidation.error.errors;
      console.log(error);
      return;
    }
    if (post_type === "Select an option") {
      setFormErrs("Please indicate Project Developer/Service Provider");
      return;
    }
    if (!post_name) {
      setFormErrs("Please title your listing");
      return;
    }
    if (sector === "Which sector are you in?") {
      setFormErrs("Please select a sector");
      return;
    }
    if (registerListingValidation.success) {
      setNewMarketPost({
        ...newMarketPost,
        post_type,
        post_name,
        sector,
        description,
      });
      setListingType(post_type);
      setStepOneDone(true);
      navigate("/create-listing/step2");
    }
  };

  // second submit
  const handleSecondSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrs("");
    const project_typeInput =
      listingType === "Project"
        ? (e.currentTarget.elements.namedItem(
            "project_type"
          ) as HTMLSelectElement)
        : null;

    const service_typeInput =
      listingType === "Service"
        ? (e.currentTarget.elements.namedItem(
            "service_type"
          ) as HTMLSelectElement)
        : null;
    const locationInput = e.currentTarget.elements.namedItem(
      "location"
    ) as HTMLInputElement;
    const linkInput = e.currentTarget.elements.namedItem(
      "link"
    ) as HTMLInputElement;

    const project_type =
      listingType === "Project" ? project_typeInput!.value : "";
    const service_type =
      listingType === "Service" ? service_typeInput!.value : "";
    const location = locationInput.value;
    const link = linkInput.value;

    if (project_type === "Select Project Type") {
      setFormErrs("Please select a project type");
      return;
    }
    if (service_type === "Select Service Type") {
      setFormErrs("Please select a service type");
      return;
    }
    if (!location) {
      setFormErrs("Please provide your location");
      return;
    }

    const registerListingDetailValidation =
      registerListingDetailSchema.safeParse({
        project_type,
        service_type,
        location,
        link,
      });

    if (!registerListingDetailValidation.success) {
      const error = registerListingDetailValidation.error.errors;
      console.log(error);
      return;
    }

    setNewMarketPost({
      ...newMarketPost,
      project_type,
      service_type,
      location,
      link,
    });

    setStepTwoDone(true);
    if (listingType === "Project") {
      navigate("/create-listing/step3");
    } else if (listingType === "Service") {
      setProductDetailDone(true);
      setTimeout(() => navigate("/marketplace"), 3000);
    }
  };

  // third submit
  const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const verification_standardInput = e.currentTarget.elements.namedItem(
      "verification_standard"
    ) as HTMLSelectElement;
    const methodology_idInput = e.currentTarget.elements.namedItem(
      "methodology_id"
    ) as HTMLInputElement;
    const vintage_yearInput = e.currentTarget.elements.namedItem(
      "vintage_year"
    ) as HTMLSelectElement;
    const price_per_creditInput = e.currentTarget.elements.namedItem(
      "price_per_credit"
    ) as HTMLInputElement;

    const verification_standard = verification_standardInput.value;
    const methodology_id = methodology_idInput.value;
    const vintage_year = vintage_yearInput.value;
    const price_per_credit = price_per_creditInput.value;

    const registerListingOptionalValidation =
      registerListingOptionalSchema.safeParse({
        verification_standard,
        methodology_id,
        vintage_year,
        price_per_credit,
      });

    if (!registerListingOptionalValidation.success) {
      const error = registerListingOptionalValidation.error.errors;
      console.log(error);
      return;
    }
    if (registerListingOptionalValidation.success) {
      setNewMarketPost({
        ...newMarketPost,
        verification_standard,
        methodology_id,
        vintage_year,
        price_per_credit,
      });
      setProductDetailDone(true);
      setTimeout(() => {
        navigate("/marketplace");
      }, 3000);
    }
  };

  return (
    <section className="create-listing">
      {searchAffiliation && (
        <AffilationSearch handleSubmit={handleChooseCompany} />
      )}
      {!stepOneDone && createListing1 && (
        <ListingForm1
          handleSubmit={handleFirstSubmit}
          errors={formErrs}
          company={currentCompany}
        />
      )}
      {!stepTwoDone && createListing2 && (
        <ListingForm2
          handleSubmit={handleSecondSubmit}
          clickHandler={clickHandler}
          errors={formErrs}
          company={currentCompany}
          listingType={listingType}
        />
      )}
      {/* ListingForm3 is only required if a the listing is for a product */}
      {stepTwoDone && createListing3 && !productDetailDone && (
        <ListingForm3
          handleSubmit={handleProductSubmit}
          clickHandler={clickHandler}
          company={currentCompany}
        />
      )}
      {/* FIXME: ensure to parseint vintage_year & price_per_credit */}
      {productDetailDone && (
        <div className="create-listing__form" style={{ fontSize: "4rem" }}>
          {listingType === "Project" &&
            "Success! Your project is now listed on Greensfeer"}
          {listingType === "Service" &&
            "Success! Your service is now listed Greensfeer"}
        </div>
      )}
    </section>
  );
};

export default CreateListing;
