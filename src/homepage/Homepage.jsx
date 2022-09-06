import React, { useState } from "react";
import "../../css/home-page.css";
import MarketingImage from "../../assets/images/home/marketing.png";
import Marketing2Image from "../../assets/images/home/marketing2.png";
import DashboardIcon from "../../assets/images/home/dashboard.png";
import { Link } from "react-router-dom";

/** Home page component */
function Homepage() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="home-page-outer">
      <div className="home-page-inner-container">
        <div className="dashboard-title">Home</div>
        <div className="products-outer">
          <div className="section-1">
            <div className="individual-product-outer col-7">
              <div className="individual-product dashboard-container">
                <div className="category-image-outer col-6">
                  <div className="welcome-user">Welcome Tushar</div>
                  <div className="user-id">IM-R-0004</div>
                  <div className="user-amount-details">
                    <div className="amount prepaid-amount">Prepaid- ₹ 100</div>
                    <div className="amount postpaid-amount">
                      Postpaid- ₹ 100
                    </div>
                  </div>
                </div>
                <div className="category-text col-6">
                  <div className="category-text-inner">
                    <img
                      className="category-image"
                      src={MarketingImage}
                      alt="graph_image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="individual-product-outer col-4">
              <div style={{ color: "grey" }}>What's New</div>
              <div className="individual-product">
                <div className="category-image-outer">
                  <img
                    className="category-image"
                    src={Marketing2Image}
                    alt="graph_image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="section-2">
            <div className="products row">
              <Link to={{ pathname: "/dashboard" }}>
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Dashboard</div>
                  </div>
                </div>
              </Link>
              <div className="individual-product">
                <div className="category-image-outer">
                  <img
                    className="category-image"
                    src={DashboardIcon}
                    alt="graph_image"
                  />
                </div>
                <div className="category-text">
                  <div className="category-text-inner">Recharge2</div>
                </div>
              </div>
              <div className="individual-product">
                <div className="category-image-outer">
                  <img
                    className="category-image"
                    src={DashboardIcon}
                    alt="graph_image"
                  />
                </div>
                <div className="category-text">
                  <div className="category-text-inner">Karix OTP</div>
                </div>
              </div>
              <div className="individual-product">
                <div className="category-image-outer">
                  <img
                    className="category-image"
                    src={DashboardIcon}
                    alt="graph_image"
                  />
                </div>
                <div className="category-text">
                  <div className="category-text-inner">BBPS 2</div>
                </div>
              </div>
              <div className="individual-product">
                <div className="category-image-outer">
                  <img
                    className="category-image"
                    src={DashboardIcon}
                    alt="graph_image"
                  />
                </div>
                <div className="category-text">
                  <div className="category-text-inner">Smart Collect2</div>
                </div>
              </div>
              <div className="individual-product">
                <div className="category-image-outer">
                  <img
                    className="category-image"
                    src={DashboardIcon}
                    alt="graph_image"
                  />
                </div>
                <div className="category-text">
                  <div className="category-text-inner">Fund Reversal</div>
                </div>
              </div>
              <div className="individual-product">
                <div className="category-image-outer">
                  <img
                    className="category-image"
                    src={DashboardIcon}
                    alt="graph_image"
                  />
                </div>
                <div className="category-text">
                  <div className="category-text-inner">Yes Bank DMT</div>
                </div>
              </div>
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Yes Bank ekyc</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Demurda</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">LIC</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Cash Deposit</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">BBPS</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Move to Prepaid</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Move to Parent</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Smart Collect</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Move to Bank</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">DMT</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Credit Card</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Travel</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Insurance</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Cash Collect</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Payment Gateway</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Pan Card</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">QR Pay</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">SMS Collect</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Recharge</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">AADHAR Pay</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">AEPS</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Fast Tag</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">LIC Bug BOX</div>
                  </div>
                </div>
              )}
              {showMore && (
                <div className="individual-product">
                  <div className="category-image-outer">
                    <img
                      className="category-image"
                      src={DashboardIcon}
                      alt="graph_image"
                    />
                  </div>
                  <div className="category-text">
                    <div className="category-text-inner">Request Funds</div>
                  </div>
                </div>
              )}
            </div>
            <div className="show-full-list-toggle-outer">
              <button
                className="show-full-list-toggle"
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                {showMore ? "See Less" : "Show More"}
              </button>
            </div>
          </div>
          <div className="section-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
