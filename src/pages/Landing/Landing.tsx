import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import NavMenu from "../../components/NavMenu/NavMenu";
import Info from "../../components/Info/Info";
import ProductInfo from "../../data/InfoData.json";
import Footer from "../../components/Footer/Footer";

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
