import { matchPath, useLocation } from "react-router-dom";
import ListingForm1 from "./ListingForm1";
import "./CreateListing.scss";
import ListingForm2 from "./ListingForm2";
import ListingForm3 from "./ListingForm3";

const CreateListing = () => {
  const location = useLocation();
  const path = location.pathname;

  const createListing1 = matchPath(path, "/create-listing/step1");
  const createListing2 = matchPath(path, "/create-listing/step2");
  const createListing3 = matchPath(path, "/create-listing/step3");

  return (
    <section className="create-listing">
      {createListing1 && <ListingForm1 />}
      {createListing2 && <ListingForm2 />}
      {/* ListingForm3 is only required if a the listing is for a product */}
      {createListing3 && <ListingForm3 />}
    </section>
  );
};

export default CreateListing;
