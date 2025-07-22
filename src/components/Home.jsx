import React from "react";
import Landing from "./Landing";
import Menu from "./Menu";
import GroceriesMenu from "./GroceriesMenu";
import Dineout from "./Dineout";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <Landing />
      <Menu />
      <GroceriesMenu />
      <Dineout />
      <Footer/>
    </div>
  );
};

export default Home;
