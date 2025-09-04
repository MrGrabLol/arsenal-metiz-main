import React from "react";
import PopularProducts from "../components/sections/PopularProducts";
import NewProducts from "../components/sections/NewProducts";
import LeaveRequest from "../components/sections/LeaveRequest";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Subscribe from "../components/sections/Subscribe";
import LatestNews from "../components/sections/LatestNews";

export default function page() {
  return (
    <>
      <PopularProducts />
      <NewProducts />
      <LeaveRequest />
      <WhyChooseUs />
      <Subscribe />
      <LatestNews />
    </>
  );
}
