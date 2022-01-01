import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const BeARider = () => {
  const [formData, updateFormData] = useState();

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      //   // Trimming any whitespace
      //   [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API or something
  };

  return (
    <>
      <Navbar />
      <div>
        <section className="bg-gray-100 bg-opacity-50 py-12">
          <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
            <div className="space-y-6 bg-white py-6 rounded-m">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h4 className="max-w-sm mx-auto md:w-1/3">Account</h4>
                <div className="max-w-sm mx-auto md:w-2/3 space-y-6">
                  <div className=" relative ">
                    <input
                      type="email"
                      id="user-info-email"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" relative ">
                    <input
                      type="password"
                      id="user-info-password"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className=" relative ">
                    <input
                      type="password"
                      id="user-info-confirm-password"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <hr />
              {/* personal info */}
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h4 className="max-w-sm mx-auto md:w-1/3">Personal info</h4>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="user-info-name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="user-info-phone"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Phone number"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="user-info-address"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Address"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="user-info-age"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Age"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <label
                        for="profile-upload"
                        className="text-md font-semibold"
                      >
                        Upload Profile Picture
                      </label>
                      <input
                        className="my-4"
                        type="file"
                        id="profile-upload"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <label for="NID-upload" className="text-md font-semibold">
                        Upload National ID Card
                      </label>
                      <input
                        className="my-4"
                        type="file"
                        id="NID-upload"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* vehicle type */}
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h4 className="max-w-sm mx-auto md:w-1/3">Vehicle Type</h4>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className=" relative ">
                      <select
                        className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        name="vehicles"
                        onChange={handleChange}
                      >
                        <option value="">Select a Type</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* vehicle documents */}
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h4 className="max-w-sm mx-auto md:w-1/3">Vehicle info</h4>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="vehicle-model"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Model"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="vehicle-palate"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="License Palate Number"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <label
                        for="file-upload"
                        className="text-md font-semibold"
                      >
                        Upload License ID
                      </label>
                      <input
                        className="my-4"
                        type="file"
                        id="file-upload"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <Link
                  //   onClick={handleSubmit}
                  to="/rider-profile"
                  className="py-2 px-12 uppercase tracking-wide bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Submit
                </Link>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default BeARider;
