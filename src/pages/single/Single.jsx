import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editbtn">
              <MdOutlineEdit />
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYXV0aWZ1bCUyMHdvbWFufGVufDB8fDB8fHww"
                alt="img"
                className="itemimg"
              />
              <div className="details">
                <h1 className="itemTitle">Luna Janer</h1>
                <div className="detailItems">
                  <span className="itemKey">User Name:</span>
                  <span className="itemValue">_luna_janer</span>
                </div>
                <div className="detailItems">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">lunajaner@gmail.com</span>
                </div>
                <div className="detailItems">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+911234123</span>
                </div>
                <div className="detailItems">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">street-2 NewYork</span>
                </div>
                <div className="detailItems">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
