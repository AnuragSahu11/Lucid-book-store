import { Homepage, Navbar, Footer } from "./components/components";
import { Router, Route, Link, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
