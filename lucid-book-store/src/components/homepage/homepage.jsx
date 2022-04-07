import React, { useEffect } from "react";
import { changeTitle } from "../../utility";
import { HomepageCategories } from "./homepage-categories";
import { HomepageFeatures } from "./homepage-features";
import "./homepage.css";

const Homepage = () => {
  useEffect(() => {
    changeTitle("Lucid Bookstore");
  }, []);
  return (
    <>
      <HomepageCategories />
      <HomepageFeatures />
    </>
  );
};

export { Homepage };
