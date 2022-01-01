import React from "react";
import SideBar from "../SideBar/SideBar";
import RidersManagement from "./RidersManagement";

const ManageRiders = () => {
  return (
    <section className="md:min-h-screen md:flex">
      <SideBar />
      <RidersManagement />
    </section>
  );
};

export default ManageRiders;
