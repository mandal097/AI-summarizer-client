import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Transcribe from "./pages/Transcribe";
import Summary from "./pages/Summary";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tr" element={<Transcribe />} />
        <Route path="/sm" element={<Summary />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
