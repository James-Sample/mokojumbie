import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Banner from "./banner.js";
import OurStory from "../pages/ourStory";
import OurFood from "../pages/ourFood";
import OurPeople from "../pages/ourPeople";
import ContactUs from "../pages/contactUs";
import Home from "../pages/home";

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Home />
      <Routes>
        <Route path="/our-story" element={OurStory()} />
        <Route path="/our-food" element={OurFood()} />
        <Route path="/our-people" element={OurPeople()} />
        <Route path="/contact-us" element={ContactUs()} />
      </Routes>
    </div>
  );
};

export default App;
