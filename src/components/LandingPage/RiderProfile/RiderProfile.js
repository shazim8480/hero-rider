import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import RiderProfileDetails from "./RiderProfileDetails";

const RiderProfile = () => {
  const { id } = useParams();

  //finding the selected service id to show service details////
  const [riderDetails, setRiderDetails] = useState({});

  useEffect(() => {
    const url = `https://warm-dusk-05608.herokuapp.com//rider/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRiderDetails(data));
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="flex h-screen overflow-hidden bg-white rounded-lg">
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div
              className="
              flex flex-col flex-grow
              pt-5
              overflow-y-auto
              bg-white
              border-r border-indigo-50
            "
            >
              <div className="flex flex-col items-center flex-shrink-0 px-4">
                <h4
                  className="
                    block
                    p-2
                    text-xl
                    font-medium
                    text-indigo-900
                    transition
                    duration-500
                    ease-in-out
                    transform
                    cursor-pointer
                    hover:text-indigo-900
                  "
                >
                  {riderDetails.name}
                </h4>
                <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <h4 className="text-xl text-neutral-600">
                  Available information
                </h4>
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="rounded-lg bg-indigo-50 h-96">
                    {/* <RiderProfileDetails riderDetails={riderDetails} /> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default RiderProfile;
