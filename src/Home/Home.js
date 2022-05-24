import React from "react";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import HomeTools from "./HomeTools";
import ReviewHome from "./ReviewHome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeTools></HomeTools>
      <BusinessSummery></BusinessSummery>
      <ReviewHome></ReviewHome>
    </div>
  );
};

export default Home;
