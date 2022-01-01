import Home from "./components/LandingPage/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeARider from "./components/LandingPage/BeARider/BeARider";
import RiderProfile from "./components/LandingPage/RiderProfile/RiderProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/be-a-rider" element={<BeARider />} />
          <Route path="/rider-profile" element={<RiderProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
