import React from "react";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const TempProfile = ({ riderInfo }) => {
  return (
    <div className="container">
      <Navbar />
      <div>
        <h4 className="text-4xl leading-relaxed flex justify-center text-center align-center p-16 mx-40 text-indigo-900 font-extrabold">
          Welcome! {riderInfo.name} Thank you for joining us! Hope your journey
          will be fulfilled with us!
        </h4>
        <button
          // onClick={handleClickRiderDetails}
          className="py-2 w-1/4 flex justify-center mx-96 align-center px-12 uppercase tracking-wide bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Go to Profile
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default TempProfile;
