import { useEffect, useState } from "react";
import "./App.css";
import BackToTop from "./components/BackToTop/BackToTop";
import Navbar from "./components/NavBar/Navbar";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Home from "./pages/Home";
import { scrollToSection } from "./Utils/ScrollUtils/ScrollUtils";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [sideMenu, setSideMenu] = useState("closed");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
    if (!loading) {
      const hash = window.location.hash.substr(1);
      setTimeout(()=>{
        scrollToSection(hash);
        setActiveTab(hash);
      },1000)
      setTimeout(()=>{
        scrollToSection(hash);

      },1100)
    }
  }, [loading]);

  return (
    <>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sideMenu={sideMenu}
        setSideMenu={setSideMenu}
      />
      <Home activeTab={activeTab} setActiveTab={setActiveTab} />
      {sideMenu === "closed" && <SocialLinks />}

      <BackToTop />
    </>
  );
}

export default App;
