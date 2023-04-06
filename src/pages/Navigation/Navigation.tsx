import { useLocation } from "react-router-dom";
import AppNav from "../../components/AppNav/AppNav";
import AppNavMobile from "../../components/AppNavMobile/AppNavMobile";
import AppNavMobileBottom from "../../components/AppNavMobile/AppNavMobileBottom";
import "./Navigation.scss";

const Navigation = () => {
  const location = useLocation();

  // const isNetworkPath = location.pathname.includes("/network");
  // const isMessagesPath = location.pathname.includes("/messages");
  const isProfilePath = location.pathname.includes("/profile");
  const isCompanyPath = location.pathname.includes("/company");
  const isMarketplacePath = location.pathname.includes("/marketplace");

  const shouldRenderNavBar =
    // isNetworkPath ||
    // isMessagesPath ||
    isProfilePath || isCompanyPath || isMarketplacePath;
  // const shouldRenderNavBottom = shouldRenderNavBar;

  return (
    <div className="navigation">
      <div className="navigation__mobile">
        {shouldRenderNavBar && <AppNavMobile />}
        {/* {shouldRenderNavBottom && <AppNavMobileBottom />} */}
      </div>
      <div className="navigation__tablet-desktop">
        {shouldRenderNavBar && <AppNav />}
      </div>
    </div>
  );
};

export default Navigation;
