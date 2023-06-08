// import logo from './logo.svg';
import "./App.css";
// import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import Intro from "./Components/Introsection/Intro";
import Service from "./Components/SErviceSection/Service";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/PortFolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
