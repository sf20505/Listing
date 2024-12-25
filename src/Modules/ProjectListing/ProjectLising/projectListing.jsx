import React, { useEffect } from "react";
import "./ProjectListing.css"; // Import the CSS file for styling
import ListingTable from "../../Shared/Table";
import Loader from "../../Shared/Loader";

export const ProjectListing = ({ fetchData, dataSource, loading }) => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "s.no",
      key: "s.no",
    },
    {
      title: "Percentage funded",
      dataIndex: "percentage.funded",
      key: "pct",
    },
    {
      title: "Amount pledged",
      dataIndex: "amt.pledged",
      key: "amt",
    },
  ];
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ListingTable
          columns={columns}
          data={dataSource}
          bordered
          pagination={{
            pageSize: 5, // Set maximum 5 records per page
            showSizeChanger: false, // Hide the size changer
          }}
        />
      )}
    </div>
  );
};
{
  /* <div className="logo">Project Listing</div>
.logo {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
} */
}
