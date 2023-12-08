import React, { useContext } from "react";
import './navbar.scss'
import { IoSearch } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineFullscreenExit } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons//md";
import { IoListOutline } from "react-icons/io5";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const {dispatch,darkMode} = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <IoSearch />
        </div>
        <div className="items">
          <div className="item">
            <MdOutlineLanguage />
            English
          </div>
          <div className="item" onClick={()=>{dispatch({type:"TOOGLE"})}}>
            {
              darkMode ? <MdOutlineLightMode /> : <MdDarkMode />
            }
          </div>
          <div className="item">
            <MdOutlineFullscreenExit />
          </div>
          <div className="item">
            <IoMdNotificationsOutline />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubbleOutline />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <IoListOutline />
          </div>
          <div className="item">
            <img src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png" alt="img" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
