import React from "react";
import { Outlet } from "react-router-dom";
import "assets/tailwind.css";
function AdminMaster() {
  return (
    <div className="flex">
      <div>Menu</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminMaster;
