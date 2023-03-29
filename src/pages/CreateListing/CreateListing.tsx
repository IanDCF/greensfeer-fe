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
import getAffiliation from "../../helpers/affiliationFetcher";
import { useAuth } from "../../context/AuthProvider/AuthProvider";

const CreateListing = () => {
  getAffiliation();
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

  // validate post
  useEffect(() => {
    if (newMarketPost.post_type === "Service") {
      // validate & run axios.post
      const newListing = validateListing();
      //check user via token, return user id & company id
      if (currentUser) {
        const token = currentUser.getIdToken();
      }
      const service = {
        post_name: newListing.post_name,
        post_type: newListing.post_type,
        post_category: newListing.service_type,
        description: newListing.description,
        link: newListing.link,
        location: newListing.location,
        // user_id
        // company_id
        // contact
      };
    }
    if (newMarketPost.post_type === "Product") {
      //validate & run axios.post
    }
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
    const post_typeInput = e.currentTarget.elements.namedItem(
      "post_type"
    ) as HTMLInputElement;
    const post_nameInput = e.currentTarget.elements.namedItem(
      "post_name"
    ) as HTMLInputElement;
    const sectorInput = e.currentTarget.elements.namedItem(
      "sector"
    ) as HTMLInputElement;
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
    if (!post_name) {
      console.log("name required");
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
      setStepOneDone(true);
      navigate("/create-listing/step2");
    }
  };

  // second submit
  const handleSecondSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const methodologyInput = e.currentTarget.elements.namedItem(
      "methodology"
    ) as HTMLInputElement;
    const service_typeInput = e.currentTarget.elements.namedItem(
      "service_type"
    ) as HTMLInputElement;
    const locationInput = e.currentTarget.elements.namedItem(
      "location"
    ) as HTMLInputElement;
    const linkInput = e.currentTarget.elements.namedItem(
      "link"
    ) as HTMLInputElement;

    const methodology = methodologyInput.value;
    const service_type = service_typeInput.value;
    const location = locationInput.value;
    const link = linkInput.value;

    const registerListingDetailValidation =
      registerListingDetailSchema.safeParse({
        methodology,
        service_type,
        location,
        link,
      });

    if (!registerListingDetailValidation.success) {
      const error = registerListingDetailValidation.error.errors;
      console.log(error);
      return;
    }
    if (registerListingDetailValidation.success) {
      setNewMarketPost({
        ...newMarketPost,
        methodology,
        service_type,
        location,
        link,
      });
      setStepTwoDone(true);
      navigate("/create-listing/step3");
    }
  };

  // third submit
  const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const verification_standardInput = e.currentTarget.elements.namedItem(
      "verification_standard"
    ) as HTMLInputElement;
    const methodology_idInput = e.currentTarget.elements.namedItem(
      "methodology_id"
    ) as HTMLInputElement;
    const vintage_yearInput = e.currentTarget.elements.namedItem(
      "vintage_year"
    ) as HTMLInputElement;
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
    }
  };

  return (
    <section className="create-listing">
      {!stepOneDone && createListing1 && (
        <ListingForm1 handleSubmit={handleFirstSubmit} />
      )}
      {!stepTwoDone && createListing2 && (
        <ListingForm2 handleSubmit={handleSecondSubmit} />
      )}
      {/* ListingForm3 is only required if a the listing is for a product */}
      {stepTwoDone && createListing3 && (
        <ListingForm3 handleSubmit={handleProductSubmit} />
      )}
      {/* FIXME: ensure to parseint vintage_year & price_per_credit */}
    </section>
  );
};

export default CreateListing;
