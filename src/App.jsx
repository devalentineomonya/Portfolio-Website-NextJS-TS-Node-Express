import { useEffect, useState } from "react";
import "./App.css";
import BackToTop from "./components/BackToTop/BackToTop";
import Navbar from "./components/Navbar/Navbar";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Home from "./pages/Home";
import { scrollToSection } from "./Utils/ScrollUtils/ScrollUtils";
import { useDataContext } from "./Context/DataContext";
import Loader from "./components/Loader/Loader";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [sideMenu, setSideMenu] = useState("closed");
  const { loading, setLoading } = useDataContext();
  const {data,error} = useDataContext();

  console.table(data);
  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
    if (!loading) {
      const hash = window.location.hash.substr(1);
      setTimeout(() => {
        scrollToSection(hash);
        setActiveTab(hash);
      }, 1000);
    }
  }, [loading]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}

export default App;
