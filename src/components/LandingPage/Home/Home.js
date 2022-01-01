import React from "react";
import { Hero } from "../Hero/Hero";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Rent from "../Rent/Rent";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Rent />
      <Footer />
    </div>
  );
};

export default Home;
