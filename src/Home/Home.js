import React from "react";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import HomeTools from "./HomeTools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeTools></HomeTools>
      <BusinessSummery></BusinessSummery>
    </div>
  );
};

export default Home;
