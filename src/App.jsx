import "./App.css";
import BackToTop from "./components/BackToTop/BackToTop";
import Navbar from "./components/NavBar/Navbar";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Home from "./pages/Home"

function App() {
  return (
    <>
     <Navbar/>
   <Home/>
   <SocialLinks/>
   <BackToTop/>
    </>
  );
}

export default App;
