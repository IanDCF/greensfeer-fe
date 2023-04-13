import { useLocation } from "react-router-dom";
import AppNav from "../../components/AppNav/AppNav";
import AppNavMobile from "../../components/AppNavMobile/AppNavMobile";
import AppNavMobileBottom from "../../components/AppNavMobile/AppNavMobileBottom";
import { useAuth } from "../../context/AuthProvider/AuthProvider";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // const isNetworkPath = location.pathname.includes("/network");
  // const isMessagesPath = location.pathname.includes("/messages");
  const isProfilePath = location.pathname.includes("/gs/");
  const isCompanyPath = location.pathname.includes("/company");
  const isMarketplacePath = location.pathname.includes("/marketplace");

  const shouldRenderNavBar =
    // isNetworkPath ||
    // isMessagesPath ||
    isProfilePath || isCompanyPath || isMarketplacePath;
  // const shouldRenderNavBottom = shouldRenderNavBar;

  return (
    <div className="navigation">
      {/* <div className="navigation__mobile"> */}
      {/* {shouldRenderNavBar && <AppNav />} */}
      {/* {shouldRenderNavBottom && <AppNavMobileBottom />} */}
      {/* </div> */}
      {/* <div className="navigation__tablet-desktop"> */}
      {shouldRenderNavBar && currentUser && <AppNav />}
      {/* </div> */}
    </div>
  );
};

export default Navigation;
