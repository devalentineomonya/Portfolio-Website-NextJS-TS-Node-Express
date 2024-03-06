import "./App.css";
import BackToTop from "./components/BackToTop/BackToTop";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home"

function App() {
  return (
    <>
     <Navbar/>
   <Home/>
   <BackToTop/>
    </>
  );
}

export default App;
