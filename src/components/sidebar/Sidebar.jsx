import React, { useContext } from "react";
import "./sidebar.scss";
import { MdDashboard } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShop } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { LuFiles } from "react-icons/lu";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

  const {dispatch} =  useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">theadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>
              <MdDashboard />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li>
              <HiOutlineUser />
              <span>Users</span>
            </li>
          </Link>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li>
              <AiOutlineShop />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <FiShoppingCart />
            <span>Orders</span>
          </li>
          <li>
            <TbTruckDelivery />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <IoIosStats />
            <span>Stats</span>
          </li>
          <li>
            <IoMdNotificationsOutline />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MdOutlineSettingsSystemDaydream />
            <span>System</span>
          </li>
          <li>
            <LuFiles />
            <span>Logs</span>
          </li>
          <li>
            <IoMdSettings />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <CgProfile />
            <span>Profile</span>
          </li>
          <li>
            <RiLoginBoxLine />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption" onClick={()=>{dispatch({type:"LIGHT"})}}></div>
        <div className="coloroption" onClick={()=>{dispatch({type:"DARK"})}}></div>
      </div>
    </div>
  );
};

export default Sidebar;
