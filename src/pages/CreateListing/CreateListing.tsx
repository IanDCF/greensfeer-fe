import { useState, useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
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

const CreateListing = () => {
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
  // listingOptionalDone

  // validate post

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
    }
  };

  // second submit

  // third submit

  return (
    <section className="create-listing">
      {createListing1 && <ListingForm1 />}
      {createListing2 && <ListingForm2 />}
      {/* ListingForm3 is only required if a the listing is for a product */}
      {createListing3 && <ListingForm3 />}
      {/* FIXME: ensure to parseint vintage_year & price_per_credit */}
    </section>
  );
};

export default CreateListing;
