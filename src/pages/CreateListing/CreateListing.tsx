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

  const newListingDefault = {} as TNewListing;
  const [newMarketPost, setNewMarketPost] =
    useState<TNewListing>(newListingDefault);

  const createListing1 = matchPath(path, "/create-listing/step1");
  const createListing2 = matchPath(path, "/create-listing/step2");
  const createListing3 = matchPath(path, "/create-listing/step3");

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
