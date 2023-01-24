import React from "react";
// import $ from "jquery";

import "./dashboard.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ChatIcon from "@mui/icons-material/Chat";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import WifiIcon from "@mui/icons-material/Wifi";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TokenIcon from "@mui/icons-material/Token";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import WorkIcon from "@mui/icons-material/Work";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import GroupIcon from "@mui/icons-material/Group";

const Dashboard = () => {
  return (
    <>
      {/* sidebar start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <div className="wrapper"></div>
            <div className="sidebar">
              <div className="top">
                <a href="/" style={{ textDecoration: "none" }}>
                  <span className="logo">Admin Panel</span>
                </a>
              </div>
              <hr />
              <div className="center">
                <ul>
                  <p className="title">MAIN</p>
                  <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                  </li>
                  <p className="title">APPLICATIONS</p>
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <CalendarMonthTwoToneIcon className="icon" />
                      <span>Calendar</span>
                    </li>
                  </a>
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <ChatIcon className="icon" />
                      <span>Chat</span>
                    </li>
                  </a>
                  <li>
                    <CreditCardIcon className="icon" />
                    <span>File Manager</span>
                  </li>
                  <li>
                    <CreditCardIcon className="icon" />
                    <span>Ecommerce</span>
                  </li>
                  <li>
                    <EmailIcon className="icon" />
                    <span>Email</span>
                  </li>
                  <li>
                    <DescriptionIcon className="icon" />
                    <span>Invoices</span>
                  </li>
                  <li>
                    <InsertDriveFileIcon className="icon" />
                    <span>Projects</span>
                  </li>
                  <li>
                    <WifiIcon className="icon" />
                    <span>Contacts</span>
                  </li>
                  <p className="title">LAYOUTS</p>
                  <p className="title">PAGES</p>
                  <li>
                    <HowToRegIcon className="icon" />
                    <span>Authentications</span>
                  </li>
                  <li>
                    <TokenIcon className="icon" />
                    <span>Utility</span>
                  </li>
                  <p className="title">COMPONENTS</p>
                  <li>
                    <WorkIcon className="icon" />
                    <span>UI Elements</span>
                  </li>
                  <li>
                    <BorderColorIcon className="icon" />
                    <span>Forms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <p>Dashboard</p>
            {/* revenue, orders, customers section start */}
            <div className="row">
              <div className="col-lg-4">
                <div className="revenue shadow-lg p-1  bg-white rounded">
                  <div className="row">
                    <div className="col-lg-8 d-flex">
                      <div className="revenueicon">
                        <MonetizationOnIcon className="icon " />
                      </div>
                      <div>
                        <p>Revenue</p>
                        <p className="revenueb">$21,456</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="revenuep">
                        <p>+ 2.65%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="revenue shadow-lg p-1  bg-white rounded">
                  <div className="row">
                    <div className="col-lg-8 d-flex">
                      <div className="revenueicon">
                        <FilterFramesIcon className="icon " />
                      </div>
                      <div>
                        <p>Orders</p>
                        <p className="revenueb">5,643</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="orders">
                        <p>- 0.82%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="revenue shadow-lg p-1  bg-white rounded">
                  <div className="row">
                    <div className="col-lg-8 d-flex">
                      <div className="revenueicon">
                        <GroupIcon className="icon " />
                      </div>
                      <div>
                        <p>Customers</p>
                        <p className="revenueb">45,254</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="orders">
                        <p>- 1.04%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* revenue, orders, customers section end */}

            {/* overview section start */}

            <div className="row revenue shadow-lg p-1  bg-white rounded mt-5">
              <h5>Overview</h5>
              <div className="row">
                <div className="col-lg-3 p-2">
                  <div>
                    <p>This Month</p>
                    <p className="revenueb">
                      $24,568 <span className="overviewp">+2.65%</span>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p>Orders</p>
                      <b>5,643</b>
                    </div>
                    <div className="col-lg-6">
                      <p>sales</p>
                      <b>16,273</b>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p>Order Value</p>
                      <b>12.03%</b>
                    </div>
                    <div className="col-lg-6">
                      <p>Customers</p>
                      <b>21,456</b>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p>Income</p>
                      <b>$35,652</b>
                    </div>
                    <div className="col-lg-6">
                      <p>Experince</p>
                      <b>$12,248</b>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
            {/* overview section end */}

            {/* user, order,product section start */}
            <div className="row">
              <div className="col-lg-4">
                <div className="shadow-lg p-1  bg-white rounded mt-5"></div>
              </div>
              <div className="col-lg-4">
                <div className="shadow-lg p-1  bg-white rounded mt-5"></div>
              </div>
              <div className="col-lg-4">
                <div className="shadow-lg p-1  bg-white rounded mt-5">
                  <div className="d-flex justify-content-between">
                    <h5>Top Product</h5>
                    <div>
                      <select
                        class="form-select border-0"
                        aria-label="Default select example"
                      >
                        <option selected>Monthly</option>
                        <option value="1">Weekaly</option>
                        <option value="2">Yearly</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="row">
                      <div className="col-lg-8 d-flex">
                        <div className="revenueicon">
                          <p className="icon ">#1</p>
                        </div>
                        <div>
                          <p className="revenu">Polo blue T-shirt</p>
                          <p className="revenueb">$25.4</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="productp">
                          <p>3.82k</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-lg-8 d-flex">
                        <div className="revenueicon">
                          <p className="icon ">#2</p>
                        </div>
                        <div>
                          <p>hoodle for men</p>
                          <p className="revenueb">$25.4</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="productp">
                          <p>3.14k</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-lg-8 d-flex">
                        <div className="revenueicon">
                          <p className="icon ">#3</p>
                        </div>
                        <div>
                          <p>Red color Cap</p>
                          <p className="revenueb">$25.4</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="productp">
                          <p>2.84k</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* user, order,product section end */}
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </>
  );
};

export default Dashboard;
