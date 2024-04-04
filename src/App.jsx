import { useState } from "react";
import "./App.css";
import BackToTop from "./components/BackToTop/BackToTop";
import Navbar from "./components/NavBar/Navbar";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Home from "./pages/Home";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Home activeTab={activeTab} setActiveTab={setActiveTab} />
      <SocialLinks />
      <BackToTop />
    </>
  );
}

export default App;
