import { GoSearch } from "react-icons/go";
import "./Searchbar.scss";
const Searchbar = () => {
  return (
    <div className="search">
      <GoSearch className="search__icon" />
      <input className="search__input" type="text" placeholder="Search" />
    </div>
  );
};

export default Searchbar;
