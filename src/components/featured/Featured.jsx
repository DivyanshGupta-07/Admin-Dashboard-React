import React from 'react'
import './featured.scss';
import { IoMdMore } from "react-icons/io";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <IoMdMore fontSize={'20px'}/>
      </div>
      <div className="bottom">
        <div className="featuredchart">
          <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$977</p>
        <p className="desc">hello user this is only demo text as description adding some more</p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemresult positive">
              <MdOutlineKeyboardArrowUp />
              <div className="resultamount">$23.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Week</div>
            <div className="itemresult negative">
              <MdOutlineKeyboardArrowUp />
              <div className="resultamount">$23.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Month</div>
            <div className="itemresult positive">
              <MdOutlineKeyboardArrowUp />
              <div className="resultamount">$23.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured