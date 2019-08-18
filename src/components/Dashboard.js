import React from "react";
import PropertyList from "./PropertyList";
import PropertyListFilters from "./PropertyListFilters";

const Dashboard = () => (
  <div>
    <PropertyListFilters />
    <PropertyList />
  </div>
);

export default Dashboard;
