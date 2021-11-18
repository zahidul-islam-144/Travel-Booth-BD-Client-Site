import React from "react";
import "./Home.css";
import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs/AboutUs";
import TravelPackages from "./TravelPackages/TravelPackages";
import Map from "../Map/Map";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <div>
        <Banner id="home"></Banner>
        <AboutUs></AboutUs>
        <TravelPackages></TravelPackages>
        <Map></Map>
        <Contact></Contact>
      </div>
    </>
  );
};

export default Home;
