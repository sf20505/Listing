import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../Modules/ProjectListing/projects";
import { ProjectListing } from "../Modules/ProjectListing/ProjectLising/projectListing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/project-listing" element={<Projects />} />
      <Route path="/item-listing" element={<Projects><div>Item Listing Page</div></Projects>} />
    </Routes>
  );
};

export default AppRoutes;
