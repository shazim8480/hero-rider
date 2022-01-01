import "./App.css";
import Home from "./components/LandingPage/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeARider from "./components/LandingPage/BeARider/BeARider";
import RiderProfile from "./components/LandingPage/RiderProfile/RiderProfile";
import { createContext, useEffect, useState } from "react";
import TempProfile from "./components/LandingPage/RiderProfile/TempProfile";
import ManageRiders from "./components/Admin/ManageRiders/ManageRiders";
import DrivingLessonLearner from "./components/LandingPage/DrivingLessonLearner/DrivingLessonLearner";
import Packages from "./components/LandingPage/Packages/Packages";

export const RiderContext = createContext();

function App() {
  const [riderDetails, setRiderDetails] = useState([]);

  useEffect(() => {
    fetch(`https://warm-dusk-05608.herokuapp.com//riders`)
      .then((res) => res.json())
      .then((data) => {
        setRiderDetails(data);
      });
  }, []);

  return (
    <RiderContext.Provider value={[riderDetails, setRiderDetails]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/be-a-rider" element={<BeARider />} />
          <Route
            path="/driving-lesson-learner"
            element={<DrivingLessonLearner />}
          />
          <Route path="/rider-profile/:id" element={<RiderProfile />} />
          <Route path="/packages" element={<Packages />} />
          {/* admin routes */}
          <Route path="/admin" element={<ManageRiders />} />
        </Routes>
      </BrowserRouter>
    </RiderContext.Provider>
  );
}

export default App;
