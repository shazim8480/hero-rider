import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DrivingLessonLearner = () => {
  // saving form information
  const [userInfo, setUserInfo] = useState({});

  //SET image URL //
  const [profileImageURL, setProfileImageURL] = useState(null);
  const [NIDImageURL, setNIDImageURL] = useState(null);

  // on blur update new info and set it to riderInfo//
  const handleBlur = (e) => {
    const newUserInfo = { ...userInfo };
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
  };

  // for image handling //////////////////////////////////
  const handleProfileImageUpload = (event) => {
    // console.log(event);
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "22477639cefee084ec3b3ca78f7fdfd2");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response);
        setProfileImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleNIDImageUpload = (event) => {
    // console.log(event);
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "22477639cefee084ec3b3ca78f7fdfd2");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response);
        setNIDImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  const handleClickPackages = () => {
    navigate("/packages");
  };

  return (
    <>
      <Navbar />
      <div>
        <section className="bg-gray-100 bg-opacity-50 py-12">
          <form
            encType="multipart/form-data"
            className="container max-w-2xl mx-auto shadow-md md:w-3/4"
          >
            <div className="space-y-6 bg-white py-6 rounded-m">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h4 className="max-w-sm mx-auto md:w-1/3">Account</h4>
                <div className="max-w-sm mx-auto md:w-2/3 space-y-6">
                  <div className=" relative ">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="Email"
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                  <div className=" relative ">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      placeholder="Password"
                      onBlur={handleBlur}
                      required
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
                        id="name"
                        name="name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Name"
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Phone number"
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Address"
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="age"
                        name="age"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Age"
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <label
                        htmlFor="profile"
                        className="text-md font-semibold"
                      >
                        Upload Profile Picture
                      </label>
                      <input
                        className="my-4"
                        type="file"
                        id="profile"
                        onChange={handleProfileImageUpload}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <label
                        htmlFor="NID-upload"
                        className="text-md font-semibold"
                      >
                        Upload National ID Card
                      </label>
                      <input
                        className="my-4"
                        type="file"
                        id="NID-upload"
                        onChange={handleNIDImageUpload}
                        required
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
                        id="vehicles"
                        name="vehicles"
                        onBlur={handleBlur}
                        required
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
              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <button
                  onClick={handleClickPackages}
                  className="py-2 px-12 uppercase tracking-wide bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Let's See Packages!
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default DrivingLessonLearner;
