import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d2d2d";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
    console.log(Mode);
  };

  return (
    <>
      <Router>
        <Navbar title="Text Craft" Mode={Mode} toggleMode={toggleMode} />
        {/* Wrap routes in React.Fragment */}
        <>
          <Routes>
            <Route path="/about" element={<About  Mode={Mode}/>} />
            <Route path="/" element={<TextForm heading="Enter text to analyze below" Mode={Mode} />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
