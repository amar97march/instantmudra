import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../sidemenu/SideMenu";
import NavBar from "../navbar/Navbar";

/*
  Default layout to be used for all logged in pages
*/
function DefaultLayout() {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="App">
      <div className="layout has-sidebar">
        <aside
          className="sidebar"
          style={showSidebar === true ? {} : { display: "none" }}
        >
          <SideMenu />
        </aside>
        <main className="content">
          <nav>
            <NavBar toggleSidebar={toggleSidebar} />
          </nav>
          <div id="page-wrap">
            <div className="headerTopWrapper"></div>
            <Outlet />
          </div>
        </main>
        <div className="overlay"></div>
      </div>
    </div>
  );
}
export default DefaultLayout;
