import React from 'react'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { MdAccountBalance } from "react-icons/md";
import './widget.scss'

const Widgets = ({type}) => {
  let data;

//temp
const amt = 1234;
const per = 30;

  switch (type) {
    case "user":
      data = {
        title:"USERS",
        ismoney:false,
        link:"See all Users",
        icon:(
          <FaRegUser className='icon' style={{color: "crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>
        )
      }
      break;
    
    case "order":
      data = {
        title:"ORDERS",
        ismoney:false,
        link:"See all Orders",
        icon:(
          <MdOutlineShoppingCart className='icon' style={{color: "goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>
        )
      }
      break;
    
    case "earning":
      data = {
        title:"EARNINGS",
        ismoney:true,
        link:"See all Earnings",
        icon:(
          <BiDollarCircle className='icon' style={{backgroundColor:"rgba(0,128,0,0.2)",color: "green"}}/>
        )
      }
      break;
    
    case "balance":
      data = {
        title:"BALANCE",
        ismoney:true,
        link:"See all Balance",
        icon:(
          <MdAccountBalance className='icon' style={{color: "purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>
        )
      }
      break;
    
    default:
      break;
  }


  return (
    <div className="widget">
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.ismoney && '$'}{amt}</span>
        <span className='links'>{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          <MdOutlineKeyboardArrowUp />
          {per}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets