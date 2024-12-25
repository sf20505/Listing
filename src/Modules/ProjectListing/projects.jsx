import React, { useEffect, useState } from "react";
import "./project.css"; // Import the CSS file for styling
import { ProjectListing } from "./ProjectLising/projectListing";
import { fetchData } from "./Api";
import {NavBar} from "../Shared/NavBar";
import { Header } from "../Shared/header";

export default function Projects() {
  const [collapsed, setCollapsed] = useState(true); // State to manage collapse
  const menuItems = [
    { name: "Project Listing", path: "/project-listing" },
    { name: "Item Listing", path: "/item-listing" },
  ];
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const getData = async () => {
    try {
      const data = await fetchData(); // Call the fetchData function from apiCalls
      setData(data); // Set data into state
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="layout">
      <NavBar
        collapsed={collapsed}
        toggleCollapse={toggleCollapse}
        menuItems={menuItems}
      />
      <div className="main-layout">
        <Header title={"Item Listing"} />
        <main className="content">
          <div className="content-box">
            <ProjectListing
              fetchData={getData}
              dataSource={data}
              loading={loading}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
