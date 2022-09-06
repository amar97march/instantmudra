import React from "react";
import Marquee from "react-fast-marquee";

import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import HambugerMenu from "../../assets/images/hamburger.png";
import SortUpIcon from "../../assets/images/SortUp.png";
import ProfileEmptyIcon from "../../assets/images/profile-empty.png";
import SearchIcon from "../../assets/images/search-icon.svg";


/*
  nav bar for logged in pages
*/

function NavBar(props) {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img src={ProfileEmptyIcon} alt="sidemenubar" />
      <img src={SortUpIcon} alt="sort-up" />
    </a>
  ));
  return (
    <Nav activeKey="1" onSelect={handleSelect}>
      <div className="nav-bar-outer shadow p-3 bg-white">
        <div className="nav-bar-section-1">
          <Nav.Item>
            <button
              className="sidebar-toggle-btn"
              onClick={() => {
                props.toggleSidebar();
              }}
            >
              <img src={HambugerMenu} alt="sidemenubar" />
            </button>
          </Nav.Item>
        </div>
        <div className="nav-bar-section-2">
        <Nav.Item style={{width: '220px'}}>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
          </Nav.Item>
          <Nav.Item>
            <div className="search-bar">
              <input
                className="search-input"
                placeholder="Search transaction"
              />
              <img src={SearchIcon} alt="search-icon" />
            </div>
          </Nav.Item>
          <Nav.Item>
            <div className="user-info">
              <div className="user-info-individual prepaid">Prepaid</div>
              <div className="user-info-individual postpaid">Postpaid</div>
              <div className="user-info-individual userid">IM-R-0004</div>
            </div>
          </Nav.Item>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              id="dropdown-custom-components"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">Red</Dropdown.Item>
              <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Orange
              </Dropdown.Item>
              <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Nav>
  );
}

export default NavBar;
