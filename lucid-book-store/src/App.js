import React from "react";
import { Footer, Loader, Navbar } from "./components/index";
import { ToastContainer } from "react-toastify";
import { toastProps } from "./utility/constants";
import { Router } from "./router/router";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Loader size="large" />
      <ToastContainer {...toastProps} />
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
