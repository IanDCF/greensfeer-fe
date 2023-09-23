import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import NavMenu from "../../components/NavMenu/NavMenu";
import Info from "../../components/Info/Info";
import ProductInfo from "../../data/LandingPageData.json";
import Footer from "../../components/Footer/Footer";

interface LandingProps {
  id: string;
  darkMode: boolean;
  topLine: string;
  headline?: string;
  description: string;
  buttonText: string;
  alt: string;
  link: string;
}

const Landing = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <NavMenu open={open} toggle={toggle} />
      <Hero />
      {ProductInfo.map((obj) => {
        return <Info key={obj.id} data={obj} />;
      })}
      <Footer />
    </>
  );
};

export default Landing;
