import React from 'react'
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/wigets/Widget';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table';

const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homecontainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart aspect={2/1} title="Last 6 Months ( Revenue )"/>
          </div>
          <div className="listcontainer">
            <div className="listtitle">Latest Transictions</div>
            <Table />
          </div>
        </div>
    </div>
  )
}

export default Home