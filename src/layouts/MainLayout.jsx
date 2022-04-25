import React from "react";

function MainLayout({ children }) {
  return (
    <div className="flex">
      <div>Menu</div>
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
