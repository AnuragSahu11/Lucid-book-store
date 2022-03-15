import React from "react";
import { HomepageCategories } from "./homepage-categories";
import { HomepageFeatures } from "./homepage-features";
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <HomepageCategories />
      <HomepageFeatures />
    </>
  );
};

export { Homepage };
