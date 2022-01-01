import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
// import { RiderContext } from "../../../App";

const BeARider = () => {
  // saving form information
  const [riderInfo, setRiderInfo] = useState({});

  //SET image URL //
  const [profileImageURL, setProfileImageURL] = useState(null);
  const [NIDImageURL, setNIDImageURL] = useState(null);
  const [licenseImageURL, setLicenseImageURL] = useState(null);

  // on blur update new info and set it to riderInfo//
  const handleBlur = (e) => {
    const newRiderInfo = { ...riderInfo };
    newRiderInfo[e.target.name] = e.target.value;
    setRiderInfo(newRiderInfo);
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

  const handleLicenseImageUpload = (event) => {
    // console.log(event);
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "22477639cefee084ec3b3ca78f7fdfd2");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response);
        setLicenseImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //form submit data//
  const handleSubmit = (e) => {
    const riderData = {
      name: riderInfo.name,
      email: riderInfo.email,
      password: riderInfo.password,
      age: riderInfo.age,
      address: riderInfo.address,
      vehicleType: riderInfo.vehicles,
      model: riderInfo.model,
      licensePalate: riderInfo.license,
      profileImageURL: profileImageURL,
      NIDImageURL: NIDImageURL,
      licenseImageURL: licenseImageURL,
    };
    // e.preventDefault();
    console.log(riderData);

    fetch("https://warm-dusk-05608.herokuapp.com//addRider", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(riderData),
    })
      .then((res) => {
        console.log("server side response", res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   // save info btn loads //
  //   const navigate = useNavigate();
  //   const handleClickRiderDetails = () => {
  //     navigate("/home");
  //   };

  return (
    <>
      <Navbar />
      <div>
        <section className="bg-gray-100 bg-opacity-50 py-12">
          <form
            onSubmit={handleSubmit}
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
              {/* vehicle documents */}
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h4 className="max-w-sm mx-auto md:w-1/3">Vehicle info</h4>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="model"
                        name="model"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="Model"
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="license"
                        name="license"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                        placeholder="License Palate Number"
                        onBlur={handleBlur}
                        required
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
                        onChange={handleLicenseImageUpload}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <button className="py-2 px-12 uppercase tracking-wide bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default BeARider;
