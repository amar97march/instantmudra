import React, { useState } from "react";
import logoImage from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

/**
 * Side Menu for logged in pages
 * @param {*} props 
 * @returns 
 */
const SideMenu = (props) => {
  const [reportCollapsed, setReportCollapsed] = useState(true);
  return (
    <div className="sideMenu">
      <Link to={{ pathname: "/" }}>
        <div className="sidebar_logo">
          <img src={logoImage} alt="side bar" />
        </div>
      </Link>
      <hr />
      <div className="menu-item-container">
        <Link
          to={{
            pathname: "/dashboard",
          }}
        >
          Dashboard
        </Link>
      </div>
      <hr />
      <div className="menu-item-container">
        <Link to={"/recharge"}>Recharge</Link>
      </div>

      <div className="menu-item-container">
        <Link to={"/"}>AEPS</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>YES Bank DMT</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>Money Transfer</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>Bill Pay</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>Amazon Dost</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>Travel</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>AEPS Airtel</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>AADHAR Pay</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>Loan</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>Fastag</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>AEPS Mobileware</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>Credit Card</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>LIC</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>Cash Deposit</Link>
      </div>
      <div className="menu-item-container">
        <Link to={"/"}>Payment Gateway</Link>
      </div>
      <div className="menu-item-container">
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="panel-title">
              <a href="#"
                onClick={()=>{setReportCollapsed(!reportCollapsed)}} >Reports</a>
            </div>
          </div>
          <div className={!reportCollapsed? "panel-collapse": "panel-collapse panel-close"}
            >
            <ul className="list-group">
              <li className="list-group-item collapse-item">
                <Link to={"/reports-cms"}>CMD Reports</Link>
              </li>
              <li className="list-group-item collapse-item">
                <Link to={"/reports-wallet"}>Wallet Reports</Link>
              </li>
            </ul>
            <div className="panel-footer">Footer</div>
          </div>
        </div>
      </div>
        {/* <Link to={"/"}>Cash Collection</Link> */}
      </div>
      <div className="menu-item-container">
        <a className="menu-item" href="/">
          QR Pay
        </a>
      </div>
      <div className="menu-item-container">
        <a className="menu-item" href="/">
          Pancard
        </a>
      </div>
      <div className="menu-item-container">
        <a className="menu-item" href="/">
          SMS Collect
        </a>
      </div>
      <div className="menu-item-container">
        <a className="menu-item" href="/">
          MATM
        </a>
      </div>
      <hr />
      <div className="menu-item-container">
        <a className="menu-item" href="/">
          NSDL Pan
        </a>
      </div>
      <div className="menu-item-container">
        <a className="menu-item" href="/">
          Payout
        </a>
      </div>
    </div>
  );
};
export default SideMenu;
