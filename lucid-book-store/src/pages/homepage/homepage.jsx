import React, { useEffect } from "react";
import { changeTitle } from "../../utility";
import { HomepageCategories } from "./components/homepage-categories";
import { HomepageFeatures } from "./components/homepage-features";
import "./homepage.css";

const Homepage = () => {
  useEffect(() => {
    changeTitle("Lucid Bookstore");
  }, []);
  return (
    <div className="homepage-background">
      <HomepageCategories />
      <HomepageFeatures />
    </div>
  );
};

export { Homepage };
